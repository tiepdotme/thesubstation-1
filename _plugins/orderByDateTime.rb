require 'date'

module Jekyll
	module OrderByDateTime
		def orderByDateTime(arr)
			arr.sort { |x,y|
				result = 1
				isYDefined = defined? y.data['datetime'][0] and y.data['datetime'] != nil
				isXDefined = defined? x.data['datetime'][0] and x.data['datetime'] != nil
				if isXDefined and isYDefined
					result = DateTime.parse(x.data['datetime'][0].to_s) <=> DateTime.parse(y.data['datetime'][0].to_s)
				elsif isXDefined
					result = -1
				end
				result
			}
		end
	end
end

Liquid::Template.register_filter(Jekyll::OrderByDateTime)
