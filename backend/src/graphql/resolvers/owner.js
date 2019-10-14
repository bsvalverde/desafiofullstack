module.exports = {
  Owner: {
    reputation: (parent) => parent.reputation,
    user_id: (parent) => parent.user_id,
    user_type: (parent) => parent.user_type,
    profile_image: (parent) => parent.profile_image,
    display_name: (parent) => parent.display_name,
    link: (parent) => parent.link
  }
};
