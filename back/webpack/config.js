const { merge } = require('webpack-merge')
const common = require('./common')

module.exports = ({ env }) => {
   const envList = ["prod", "dev"];
   if (!env)
     throw new Error("Does not exist an environment!");
   if (!envList.includes(env))
     throw new Error(
       `The environment is not valid, please choose one in this list: ${envList.join()}`
     );
   const envConfig = require(`./${env}.js`);
   return merge(common, envConfig);

}