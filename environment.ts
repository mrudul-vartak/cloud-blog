// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const base_url = 'https://ifbwr1puh2.execute-api.us-east-1.amazonaws.com/default/'
export const environment = {

    production: false,
    cognitoUserPoolId: 'us-east-1_1zaNxuIhJ',
    cognitoAppClientId: '37udhovghpqk9svt2ik3laug1c',
    GET_USER: base_url,
    CREATE_POST: base_url,
    GET_ALL_POST: base_url,
    POST_ACTION: base_url,
    GET_SINGLE_POST: base_url,
    DELETE_POST: base_url
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
