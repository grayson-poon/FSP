json.user do
  json.extract! @user,
    :id,
    :first_name,
    :last_name,
    :pronouns,
    :current_location, 
    :headline, 
    :about,
    :profile_picture
end