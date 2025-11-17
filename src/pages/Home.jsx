import React from "react";
import Container from "../components/layout/Container";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full bg-purple-500">
        <Container>
          <div className="w-full h-full bg-red-500">
            <h1>Home</h1>
          </div>
        </Container>
      </div>
    </div>
  );
}
