module.exports = {
    branches: ['main', { name: 'hotfix', prerelease: true }, { name: 'hfx-er', prerelease: true }],
    tagFormat: 'v${version}',
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            '@semantic-release/github',
            {
                successComment: false,
                failComment: false,
            },
        ],
        [
            '@semantic-release/git',
            {
                message: 'chore(release): ${nextRelease.gitTag} [skip ci]',
            },
        ],
    ],
};