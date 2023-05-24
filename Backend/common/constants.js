const ADMIN_ROLE = "Admin";
const USER_ROLE = "User";
// const MERCHANT_ROLE = "Merchant";

const ALL_ROLES = [ADMIN_ROLE, USER_ROLE];

const FIELD_ONLY_UPDATEABLE_BY_ADMIN_EVENTS = ["title", "image", "location"];

module.exports = {
  ADMIN_ROLE,
  USER_ROLE,
  ALL_ROLES,

  FIELD_ONLY_UPDATEABLE_BY_ADMIN_EVENTS,
};
