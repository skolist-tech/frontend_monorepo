import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@skolist/ui";
import { useAuth } from "@skolist/auth";

export function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome to AI Paper Generator</h1>
        <p className="text-muted-foreground">
          Hello, {user?.email || user?.phone || "User"}! Start generating your papers.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Create New Paper</CardTitle>
            <CardDescription>
              Generate a new question paper with AI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Coming soon - Build your custom question papers
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>My Papers</CardTitle>
            <CardDescription>
              View and manage your generated papers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Coming soon - Access your paper history
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Templates</CardTitle>
            <CardDescription>
              Browse pre-made paper templates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Coming soon - Quick-start templates
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
