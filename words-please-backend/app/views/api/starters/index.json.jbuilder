@starters.each do |starter|
  json.partial! 'api/starters/starter', starter: starter
end
