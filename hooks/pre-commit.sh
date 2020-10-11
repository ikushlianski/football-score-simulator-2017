# error out on failures
set -e;

for dir in packages/*/
do
  cd "${dir}"

  # check types across packages
  tsc --noEmit

  # run tests
  yarn test --watchAll=false

  cd -
done

echo '
     _____
    / ____|
   | (___   _   _   ___  ___  ___  ___  ___
    \___ \ | | | | / __|/ __|/ _ \/ __|/ __|
    ____) || |_| || (__| (__|  __/\__ \\__ \
   |_____/  \__,_| \___|\___|\___||___/|___/


'
