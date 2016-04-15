import GitRepo from 'git-repository';
import run from './run';
import fetch from './lib/fetch';

// TODO: Update deployment URL
const getRemote = (slot) => ({
  name: slot || 'production',
  url: `https://github.com/alsey/react-template-build.git`,
  website: `http://github.com/alsey/react-template-build`,
});

/**
 * Example: `npm run deploy --production`
 */
async function deploy() {

  const remote = getRemote(process.argv.includes('--production') ? null : 'staging');

  const repo = await GitRepo.open('build', {
    init: true
  });
  await repo.setRemote(remote.name, remote.url);

  if ((await repo.hasRef(remote.url, 'master'))) {
    await repo.fetch(remote.name);
    await repo.reset(`${remote.name}/master`, {
      hard: true
    });
    await repo.clean({
      force: true
    });
  }

  process.argv.push('--release');
  await run(require('./build'));

  await repo.add('--all .');
  await repo.commit('Update');
  await repo.push(remote.name, 'master');

  const response = await fetch(remote.website);
  console.log(`${remote.website} -> ${response.statusCode}`);
}

export default deploy;