import { execSync } from 'child_process';

// Function to get changed files
function getChangedFiles() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf-8' });
    return status
      .split('\n')
      .filter(line => line.trim())
      .map(line => {
        // Parse git status output (format: XY filename)
        // X = staged, Y = unstaged
        const statusCode = line.substring(0, 2);
        const filename = line.substring(3).trim();
        return { statusCode, filename };
      })
      .filter(({ statusCode }) => {
        // Include files that are modified, added, or deleted
        // Status codes: M=modified, A=added, D=deleted, ??=untracked
        return statusCode.includes('M') || statusCode.includes('A') || 
               statusCode.includes('D') || statusCode === '??';
      });
  } catch (error) {
    console.error('Error checking git status:', error.message);
    return [];
  }
}

// Function to commit changes for a specific file
function commitFile(filename) {
  try {
    // Stage the file
    execSync(`git add "${filename}"`, { stdio: 'inherit' });
    
    // Commit with the specified format
    const commitMessage = `feat: changes in ${filename}`;
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
    
    console.log(`✓ Committed: ${filename}`);
    return true;
  } catch (error) {
    console.error(`Error committing ${filename}:`, error.message);
    return false;
  }
}

// Main function to check and commit changes
function checkAndCommit() {
  const changedFiles = getChangedFiles();
  
  if (changedFiles.length === 0) {
    console.log('No changes detected');
    return;
  }
  
  console.log(`Found ${changedFiles.length} changed file(s)`);
  
  // Commit each changed file separately
  changedFiles.forEach(({ filename }) => {
    if (filename) {
      commitFile(filename);
    }
  });
}

// Run the check every 20 seconds
console.log('Auto-commit script started. Checking for changes every 20 seconds...');
console.log('Press Ctrl+C to stop.\n');

// Run immediately on start
checkAndCommit();

// Then run every 20 seconds
setInterval(() => {
  checkAndCommit();
}, 20000);

