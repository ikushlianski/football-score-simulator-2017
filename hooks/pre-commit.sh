# error out on failures
set -e;

# check types
tsc --noEmit

# run tests for all packages
cd packages/api
yarn test -- --watchAll=false
cd -

cd packages/frontend
yarn test -- --watchAll=false
cd -
