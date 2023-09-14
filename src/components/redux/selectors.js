export const selectUserAuthention = state => state.auth.authenticated;
export const selectUserData = state => state.auth.userData;
export const selectUserIsLoading = state => state.auth.isLoading;
export const selectUserError = state => state.auth.error;
export const selectUserToken = state => state.auth.token;

export const selectContacts = state => state.contacts.contacts;
export const selectContactsIsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;
export const selectContactsFilter = state => state.contacts.filter;

