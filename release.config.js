/* eslint-disable */
module.exports = {
  branches: 'master',
  tagFormat: 'v${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/gitlab',
    ['@semantic-release/exec', {
      verifyReleaseCmd: 'echo "VERSION=${nextRelease.version}" > RELEASE.env'
    }],
  ],
  debug: true,
};
