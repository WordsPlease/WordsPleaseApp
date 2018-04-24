@finishers.each do |finisher|
  json.partial! 'api/finishers/finisher', finisher: finisher
end
