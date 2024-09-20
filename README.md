# How to build an app with Safe and ERC-7579

This example app shows how to create a web app for using passkeys in your Safe. Please watch the video tutorial [Using passkeys with Safe](https://www.youtube.com/watch?v=6I_umF3MXI0) to follow along step by step.

## What you’ll need

**Prerequisite knowledge:** You will need some basic experience with [React](https://react.dev/learn) and [Next.js](https://nextjs.org/docs), and [ERC-7579](https://docs.safe.global/advanced/erc-7579/overview).

Before progressing with the tutorial, please make sure you have:

- Downloaded and installed [Node.js](https://nodejs.org/en/download/package-manager) and [pnpm](https://pnpm.io/installation).
- Created an API key from [Pimlico](https://www.pimlico.io/).


## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/5afe/safe-passkeys-tutorial-video
cd safe-passkeys-tutorial-video
pnpm i
```

Open `lib/executeTransaction.ts` and add your Pimlico API key.

Run the local development server with the following command:

```bash
pnpm dev
```

Go to `http://localhost:3000` in your browser to see the application.

## Help

Please post any questions on [Stack Exchange](https://ethereum.stackexchange.com/questions/tagged/safe-core) with the `safe-core` tag.

## License

MIT, see [LICENSE](LICENSE).
