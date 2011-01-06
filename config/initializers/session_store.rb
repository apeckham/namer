# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_namer_session',
  :secret      => 'ab195b3e91d4b81d87eefdde64fcd42ee4dd8d5f7ab3edffd903ff2784217e12420e0a931e81a7ec12bde2dd8cf79774ea64024c9cb369985b1f752d23a93ec3'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
