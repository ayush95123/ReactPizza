function isErrorWithMessage(error: unknown): error is { message: string; data?: string } {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as any).message === "string"
  );
}
export default isErrorWithMessage;