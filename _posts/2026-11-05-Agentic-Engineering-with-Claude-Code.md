---
title: Agentic Engineering with Claude Code, Blazor and a Hybrid Data Layer
description: How I pair an AI coding agent with .NET, Blazor, Radzen components, Dapper and Entity Framework to build line-of-business apps on SQL Server.
tags: [agentic engineering, claude code, blazor, dotnet, sql server]
image: /images/agentic-engineering-cover.jpg
---

Over the last year the way I write software has changed more than it did in the previous decade. I still design, review and own every line that ships, but much of the typing is now done by an AI agent working alongside me. People have started calling this **agentic engineering**, and it's how I work at my current job in the County of Placer IT Department.

## What is agentic engineering?

Agentic engineering is software development where an AI agent does more than suggest the next line. It reads the codebase, makes a plan, edits several files, runs the build and tests, and reports back, while the engineer sets the direction and checks the results. The engineer moves from typist to architect and reviewer.

The key word is *engineering*. The agent is fast, but speed without discipline just produces bugs faster. The value comes from giving it clear goals, good context and a tight feedback loop.

## How I use Claude Code

My agent of choice is [Claude Code](https://claude.ai/code). A typical session looks like this:

1. **Start with context.** Each repository has a `CLAUDE.md` file describing the solution layout, naming conventions, how to build and test, and which patterns we prefer. The agent reads it at the start of every session, so I don't repeat myself.
2. **Plan before code.** For anything non-trivial I ask for a plan first. Reviewing a short plan is much cheaper than reviewing a large diff that went the wrong way.
3. **Small, verifiable steps.** I ask for one feature or fix at a time, and the agent builds and runs the tests after each change. If something fails, it sees the error and fixes it before handing back.
4. **I review everything.** Nothing is merged until I've read the diff. The agent is a very productive teammate, not an unsupervised one.

The result is that routine work like new pages, CRUD screens, DTOs, validation and unit tests takes a fraction of the time. That leaves more of my day for the parts that need judgment: data design, security and talking with the people who use the software.

## The stack: .NET, Blazor and Radzen

Most of what I build is internal line-of-business applications, and **Blazor** on **.NET** is a great fit. I can write the UI and the back end in C#, share models between them, and skip a separate JavaScript framework.

For the UI I use the free [Radzen Blazor Components](https://blazor.radzen.com/). Their data grid alone, with paging, sorting, filtering and inline editing, saves days of work. Because Radzen follows consistent patterns, the agent produces good Radzen markup quickly, and the screens it builds look like the rest of the app.

## A hybrid data layer: Dapper and Entity Framework

Our data lives in **SQL Server**, and I use two tools to reach it:

- **Entity Framework Core** for everyday create, read, update and delete work. Change tracking, migrations and LINQ make the common cases quick and safe.
- **Dapper** for reporting, complex joins and performance-critical queries, where I want full control of the SQL and the lightest possible mapping.

Both share the same connection settings, and each repository picks the right tool for the job:

```csharp
// EF Core for a simple update
var permit = await db.Permits.FindAsync(id);
permit.Status = "Approved";
await db.SaveChangesAsync();

// Dapper for a reporting query
var rows = await conn.QueryAsync<PermitSummary>(
    "SELECT Status, COUNT(*) AS Total FROM Permits GROUP BY Status");
```

This hybrid approach also works well with an agent. I record the rule in `CLAUDE.md`: EF for transactional work, Dapper for read-heavy queries. The agent then follows it consistently across the codebase.

## Why it matters for public service

Government IT teams are asked to deliver more with limited staff and budgets. Agentic engineering doesn't replace engineers. It lets each of us deliver more, with tests and reviews still in place. For the County of Placer, that means useful tools reach staff and residents sooner, built on a stack that's secure, maintainable and familiar to any .NET developer.

If you work in the public sector and are curious about this approach, I'd be happy to compare notes. [Get in touch](mailto:kjsteinke@gmail.com).
