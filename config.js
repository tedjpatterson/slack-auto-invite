module.exports = {
  // your community or team name to display on join page.
  community: process.env.COMMUNITY_NAME || 'Code Connective',
  // your slack team url (ex: socketio.slack.com)
  slackUrl: process.env.SLACK_URL || 'codeconnective.slack.com',
  // access token of slack
  // see https://github.com/outsideris/slack-invite-automation#issue-token
  //
  // You can test your token via curl:
  //   curl -X POST 'https://YOUR-SLACK-TEAM.slack.com/api/users.admin.invite' \
  //   --data 'email=EMAIL&token=TOKEN&set_active=true' \
  //   --compressed
  slacktoken: process.env.SLACK_TOKEN || 'xoxp-278779473829-279712135175-406283561942-34f057e06f8faa47e0c4bc35aa3beaca',
  // an optional security measure - if it is set, then that token will be required to get invited.
  inviteToken: process.env.INVITE_TOKEN || null,
  // an optional security measure - if both are set, then recaptcha will be used.
  recaptchaSiteKey: process.env.RECAPTCHA_SITE || null,
  recaptchaSecretKey: process.env.RECAPTCHA_SECRET || null,
  // default locale
  locale: process.env.LOCALE || "en",
};
