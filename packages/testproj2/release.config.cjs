module.exports = {
    branches: [ 'main', { name: 'hotfix', prerelease: true }, { name: 'hfx-er', prerelease: true } , {name: 'beta', prerelease: true}, {name: 'alpha', prerelease: true}],
    tagFormat: '@dchilkur/testproj2@${version}',
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/npm',
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