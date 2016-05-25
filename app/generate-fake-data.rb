require 'faker'

puts %q{COPY "Blogs" (id, username, title, "blogContent", "createdAt", "updatedAt") FROM stdin;}

(1000...1100).each do |i|
  username = Faker::Internet.user_name
  title = Faker::Lorem.sentence(rand(3..20))
  body = Faker::Lorem.paragraph[0..255]
  created = Faker::Date.between(Date.new(2016, 1, 1), Date.today).to_s + " 00:00:00-07"
  updated = created
puts "#{i}	#{username}	#{title}	#{body}	#{created}	#{updated}"
end

puts %q{\.}
puts %q{SELECT pg_catalog.setval('"Blogs_id_seq"', 1099, true);}

REACTIONS = %w{
  Like
  Love
  Thanks
  Haha
  Wow
  Sad
  Angry
}

puts %q{COPY "BlogRxns" (id, username, "blogId", rxn, "createdAt", "updatedAt") FROM stdin;}

(2000...3000).each do |i|
  username = Faker::Internet.user_name
  blog_id = rand(1000...1100)
  reaction = REACTIONS.sample
  created = Faker::Date.between(Date.new(2016, 1, 1), Date.today).to_s + " 00:00:00-07"
  updated = created
puts "#{i}	#{username}	#{blog_id}	#{reaction}	#{created}	#{updated}"
end

puts %q{\.}
puts %q{SELECT pg_catalog.setval('"BlogRxns_id_seq"', 2999, true);}

