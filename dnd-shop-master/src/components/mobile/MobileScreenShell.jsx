export function MobileScreenShell({ children, testId }) {
  return (
    <main className="mobile-native-screen mobile-screen" data-testid={testId}>
      {children}
    </main>
  );
}
