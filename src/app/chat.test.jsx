import { render, screen, fireEvent } from "@testing-library/react";
import Chat from "./chat";

describe("Chat component", () => {
  test("renders without errors", () => {
    render(<Chat />);
    expect(screen.getByTestId("chat-component")).toBeInTheDocument();
  });

  test("starts recording when start button is clicked", () => {
    render(<Chat />);
    const startButton = screen.getByText("⏺");
    fireEvent.click(startButton);
    expect(screen.getByText("user: waiting for speech")).toBeInTheDocument();
  });

  test("stops recording and reloads the page when stop button is clicked", () => {
    render(<Chat />);
    const stopButton = screen.getByText("⏸");
    fireEvent.click(stopButton);
    expect(document.location.reload).toHaveBeenCalled();
  });

  test("displays transcription and image grid after speech processing", async () => {
    render(<Chat />);
    const startButton = screen.getByText("⏺");
    fireEvent.click(startButton);
    expect(screen.getByText("user: processing speech to text")).toBeInTheDocument();
    // Simulate speech processing
    // ...
    expect(screen.getByText("user: uploading video captures")).toBeInTheDocument();
    // Simulate image grid processing
    // ...
    expect(screen.getByText("user: processing completion")).toBeInTheDocument();
    // Simulate image upload
    // ...
    expect(screen.getByText("assistant: processing text to speech")).toBeInTheDocument();
  });
});