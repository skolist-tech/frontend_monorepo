import { Link } from "react-router-dom";
import { Button, Card, CardHeader, CardTitle, CardDescription } from "@skolist/ui";
import { useAuth } from "@skolist/auth";

export function HomePage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center gap-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Learn Smarter with{" "}
          <span className="text-primary">AI-Powered</span> Tools
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Skolist combines AI paper generation and intelligent tutoring to
          accelerate your learning journey. Create practice papers, get instant
          help, and master any subject.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          {isAuthenticated ? (
            <>
              <Button asChild size="lg">
                <a href="https://qgen.skolist.com">Go to AI Paper Generator</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://aitutor.skolist.com">Go to AI Tutor</a>
              </Button>
            </>
          ) : (
            <>
              <Button asChild size="lg">
                <Link to="/login">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/login">Sign In</Link>
              </Button>
            </>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Products</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">AI Paper Generator</CardTitle>
              <CardDescription className="text-base">
                Generate customized practice papers and question papers for any
                subject. Perfect for exam preparation, teaching, and
                self-assessment. Create unlimited papers with AI-powered question
                generation.
              </CardDescription>
              <div className="pt-4">
                <Button asChild>
                  <a href="https://qgen.skolist.com">
                    {isAuthenticated ? "Open App" : "Try Now"}
                  </a>
                </Button>
              </div>
            </CardHeader>
          </Card>

          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">AI Tutor</CardTitle>
              <CardDescription className="text-base">
                Your personal AI learning companion. Get instant explanations,
                solve problems step-by-step, and learn at your own pace.
                Available 24/7 to help you understand any concept.
              </CardDescription>
              <div className="pt-4">
                <Button asChild>
                  <a href="https://aitutor.skolist.com">
                    {isAuthenticated ? "Open App" : "Try Now"}
                  </a>
                </Button>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Skolist. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
