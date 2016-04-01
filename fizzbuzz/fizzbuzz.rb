counter = 1
while counter <= 100
	unless (counter % 3 == 0) || (counter % 5 == 0)
		print counter
	end
	if counter % 3 == 0
		print "Fizz"
	end
	if counter % 5 == 0
		print "Buzz"
	end
	puts
	counter = counter + 1
end


