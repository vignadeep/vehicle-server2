<p>
    Simple vehicle server to update
</p>
<p>
pre-requisites:
Node - V22
</p>
<p>
Local setup:
</p>
<p>
Step #1: command- "npm install"
</p>
<p>
Step #2: command- "npm run dev"
</p>
<p>
Deployment:
</p>
<p>
Node APP is deployed using "render". project is automatically built and updated on pushing to git.
deployed inside a container.
</p>
<p>
server URL: https://vehicle-server-jzte.onrender.com
</p>
<p>
APIs:
</p>
<p>
POST /create
- creates an entry in in-memory storage
- returns the last 5 entries as output
</p>
<p>
POST /upload
- uploads a PDF within size of 200 MB
- returns status 200
</p>