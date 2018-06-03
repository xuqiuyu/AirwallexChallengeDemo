import { post } from '../../../../util/fetch';

const postInviteRequest = data => post('https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com', '/prod/fake-auth', data);

export default {
  postInviteRequest
};
