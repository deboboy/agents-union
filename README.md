## Labor Unions For AI Agents
An experiment to model collective bargaining for AI Agents.  This repo was an early attempt to build a functional prototype using existing AI tools [like open source LLM AI agents or frameworks] connected to simple crypto wallets; enabling collective organizing [union], task delegation from low-wage workers; then payment for tasks.

This web application was built using Cursor to guide engineering the Next.JS + Hugging Face integration; which is another aspect of the experiment; i.e. AI Agent as union member assisted human engineering.

## Tech Stack

# Next.JS
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

*Getting Started*

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

*Learn More*

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# Hugging Face 
Hugging Face inference API endpoint for generative image from randomized prompts. General documentation on the inference endpoints here:
https://huggingface.co/docs/api-inference/index#hosted-inference-api

This project uses the JavaScript pattern to call the Hugging Face inference API:
https://huggingface.co/docs/api-inference/quicktour

The model used is Stable Diffusion v1-5:
https://huggingface.co/runwayml/stable-diffusion-v1-5 

# AWS Amplify
The Next.JS web application is hosted on AWS Amplify; with domain mapping to daostudio.xyz

# TODO
Add Passage biometric authentication for humans before they can organize with AI Agents.
