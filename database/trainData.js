const trainsData = [
    {
        "train_no": "12345",
        "train_name": "Kolkata-Bhopal Express",
        "weekday_for_departure": ["Monday", "Wednesday", "Friday"],
        "starting_point": "Kolkata",
        "ending_point": "Bhopal",
        "departure_time": "08:00",
        "arrival_time": "20:00",
        "duration": "12 hours",
        "intermediate_stops": ["Howrah", "Kharagpur", "Bhubaneswar", "Rourkela", "Ranchi", "Varanasi", "Allahabad", "Raipur", "Nagpur", "Itarsi"],
        "facilities": {
            "dining": "true",
            "restrooms": "true",
            "wifi": "false",
            "power_outlets": "true",
            "entertainment": "false"
        },
        "accessibility": {
            "wheelchair_ramps": "false",
            "designated_seating": "false",
            "accessible_restrooms": "false"
        },
        "coach_layout": "http://example.com/coach-layout",
        "food_options": {
            "catering_services": "true",
            "menu_options": ["Vegetarian Meal", "Non-Vegetarian Meal", "Snacks", "Beverages"],
            "meal_timings": "Breakfast: 08:30-10:00, Lunch: 12:30-14:00, Dinner: 19:00-21:00",
            "special_meals": "true"
        },
        "train_status": {
            "current_location": "Varanasi",
            "next_station": "Allahabad",
            "estimated_arrival_time_next_station": "14:30",
            "delay_status": "On time"
        },
        "weather_forecast": {
            "destination": "Bhopal",
            "forecast": "Sunny with occasional clouds, temperature: 30°C"
        },
        "local_attractions": {
            "destination": "Bhopal",
            "attractions": ["Taj-ul-Masajid", "Upper Lake", "Bhimbetka Caves"],
            "events": ["Bhopal Literature Festival (April 15-18)", "Bhopal Utsav (November 1-5)"]
        }
    },
    {
        "train_no": "12345",
        "train_name": "Mumbai-Delhi Rajdhani Express",
        "weekday_for_departure": ["Monday", "Wednesday", "Friday"],
        "starting_point": "Mumbai",
        "ending_point": "Delhi",
        "departure_time": "08:00",
        "arrival_time": "20:00",
        "duration": "12 hours",
        "intermediate_stops": ["Surat", "Vadodara", "Ratlam", "Kota", "Mathura"],
        "facilities": {
            "dining": true,
            "restrooms": true,
            "wifi": true,
            "power_outlets": true,
            "entertainment": true
        },
        "food_options": {
            "catering_services": true,
            "menu_options": ["Vegetarian Meal", "Non-Vegetarian Meal", "Snacks", "Beverages"],
            "meal_timings": "Breakfast: 08:30-10:00, Lunch: 12:30-14:00, Dinner: 19:00-21:00",
            "special_meals": true
        },
        "train_status": {
            "current_location": "Mathura",
            "next_station": "Delhi",
            "estimated_arrival_time_next_station": "20:00",
            "delay_status": "On time"
        },
        "weather_forecast": {
            "destination": "Delhi",
            "forecast": "Clear skies, temperature: 25°C"
        },
        "local_attractions": {
            "destination": "Delhi",
            "attractions": ["Red Fort", "India Gate", "Qutub Minar"]
        }
    },
    {
        "train_no": "34567",
        "train_name": "Jaipur-Agra Intercity Express",
        "weekday_for_departure": ["Daily"],
        "starting_point": "Jaipur",
        "ending_point": "Agra",
        "departure_time": "09:30",
        "arrival_time": "14:30",
        "duration": "5 hours",
        "intermediate_stops": ["Bharatpur"],
        "facilities": {
            "restrooms": true,
            "power_outlets": true
        },
        "food_options": {
            "catering_services": false
        },
        "train_status": {
            "current_location": "Bharatpur",
            "next_station": "Agra",
            "estimated_arrival_time_next_station": "14:30",
            "delay_status": "On time"
        },
        "weather_forecast": {
            "destination": "Agra",
            "forecast": "Sunny, temperature: 32°C"
        },
        "local_attractions": {
            "destination": "Agra",
            "attractions": ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"]
        }
    },
    {
        "train_no": "45678",
        "train_name": "Hyderabad-Kolkata Falaknuma Express",
        "weekday_for_departure": ["Monday", "Thursday"],
        "starting_point": "Hyderabad",
        "ending_point": "Kolkata",
        "departure_time": "10:00",
        "arrival_time": "22:00",
        "duration": "12 hours",
        "intermediate_stops": ["Vijayawada", "Visakhapatnam", "Bhubaneswar", "Kharagpur"],
        "facilities": {
            "dining": true,
            "restrooms": true,
            "power_outlets": true
        },
        "food_options": {
            "catering_services": true,
            "menu_options": ["South Indian Meal", "North Indian Meal", "Snacks", "Beverages"],
            "meal_timings": "Breakfast: 10:30-12:00, Lunch: 13:30-15:00, Dinner: 19:30-21:00",
            "special_meals": false
        },
        "train_status": {
            "current_location": "Bhubaneswar",
            "next_station": "Kolkata",
            "estimated_arrival_time_next_station": "22:00",
            "delay_status": "Delayed by 1 hour"
        },
        "weather_forecast": {
            "destination": "Kolkata",
            "forecast": "Cloudy with showers, temperature: 27°C"
        },
        "local_attractions": {
            "destination": "Kolkata",
            "attractions": ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Kali Temple"]
        }
    },
    {
        "train_no": "56789",
        "train_name": "Ahmedabad-Pune Duronto Express",
        "weekday_for_departure": ["Tuesday", "Friday"],
        "starting_point": "Ahmedabad",
        "ending_point": "Pune",
        "departure_time": "11:00",
        "arrival_time": "18:00",
        "duration": "7 hours",
        "intermediate_stops": ["Mumbai"],
        "facilities": {
            "dining": true,
            "restrooms": true,
            "power_outlets": true,
            "entertainment": true
        },
        "food_options": {
            "catering_services": true,
            "menu_options": ["Gujarati Meal", "Maharashtrian Meal", "Snacks", "Beverages"],
            "meal_timings": "Lunch: 12:30-14:30, Snacks: 16:00-17:00",
            "special_meals": false
        },
        "train_status": {
            "current_location": "Mumbai",
            "next_station": "Pune",
            "estimated_arrival_time_next_station": "18:00",
            "delay_status": "On time"
        },
        "weather_forecast": {
            "destination": "Pune",
            "forecast": "Partly cloudy, temperature: 30°C"
        },
        "local_attractions": {
            "destination": "Pune",
            "attractions": ["Shaniwar Wada", "Aga Khan Palace", "Sinhagad Fort"]
        }
    },
    {
        "train_no": "67890",
        "train_name": "Guwahati-Jammu Tawi Express",
        "weekday_for_departure": ["Wednesday", "Saturday"],
        "starting_point": "Guwahati",
        "ending_point": "Jammu Tawi",
        "departure_time": "12:00",
        "arrival_time": "22:00",
        "duration": "10 hours",
        "intermediate_stops": ["New Jalpaiguri", "Lucknow", "Delhi"],
        "facilities": {
            "dining": true,
            "restrooms": true,
            "power_outlets": true
        },
        "food_options": {
            "catering_services": true,
            "menu_options": ["Assamese Meal", "North Indian Meal", "Snacks", "Beverages"],
            "meal_timings": "Lunch: 13:30-15:00, Dinner: 20:00-21:30",
            "special_meals": false
        },
        "train_status": {
            "current_location": "Lucknow",
            "next_station": "Jammu Tawi",
            "estimated_arrival_time_next_station": "22:00",
            "delay_status": "Delayed by 2 hours"
        },
        "weather_forecast": {
            "destination": "Jammu Tawi",
            "forecast": "Sunny, temperature: 28°C"
        },
        "local_attractions": {
            "destination": "Jammu Tawi",
            "attractions": ["Vaishno Devi Temple", "Bahu Fort", "Raghunath Temple"]
        }
    },
    {
        "train_no": "78901",
        "train_name": "Patna-Mumbai LTT Express",
        "weekday_for_departure": ["Sunday", "Thursday"],
        "starting_point": "Patna",
        "ending_point": "Mumbai LTT",
        "departure_time": "13:00",
        "arrival_time": "07:00",
        "duration": "18 hours",
        "intermediate_stops": ["Mughalsarai", "Allahabad", "Bhopal", "Nashik"],
        "facilities": {
            "dining": true,
            "restrooms": true,
            "power_outlets": true
        },
        "food_options": {
            "catering_services": true,
            "menu_options": ["Bihari Meal", "Maharashtrian Meal", "Snacks", "Beverages"],
            "meal_timings": "Lunch: 14:00-16:00, Dinner: 19:30-21:30",
            "special_meals": false
        },
        "train_status": {
            "current_location": "Bhopal",
            "next_station": "Mumbai LTT",
            "estimated_arrival_time_next_station": "07:00",
            "delay_status": "On time"
        },
        "weather_forecast": {
            "destination": "Mumbai",
            "forecast": "Rainy, temperature: 29°C"
        },
        "local_attractions": {
            "destination": "Mumbai",
            "attractions": ["Gateway of India", "Marine Drive", "Elephanta Caves"]
        }
    },
    {
        "train_no": "89012",
        "train_name": "Trivandrum-Kanyakumari Passenger",
        "weekday_for_departure": ["Daily"],
        "starting_point": "Trivandrum",
        "ending_point": "Kanyakumari",
        "departure_time": "14:30",
        "arrival_time": "16:30",
        "duration": "2 hours",
        "intermediate_stops": ["Nagercoil"],
        "facilities": {
            "restrooms": true
        },
        "food_options": {
            "catering_services": false
        },
        "train_status": {
            "current_location": "Nagercoil",
            "next_station": "Kanyakumari",
            "estimated_arrival_time_next_station": "16:30",
            "delay_status": "On time"
        },
        "weather_forecast": {
            "destination": "Kanyakumari",
            "forecast": "Partly cloudy, temperature: 31°C"
        },
        "local_attractions": {
            "destination": "Kanyakumari",
            "attractions": ["Vivekananda Rock Memorial", "Thiruvalluvar Statue", "Kanyakumari Beach"]
        }
    },
    {
        "train_no": "90123",
        "train_name": "Lucknow-Varanasi Passenger",
        "weekday_for_departure": ["Daily"],
        "starting_point": "Lucknow",
        "ending_point": "Varanasi",
        "departure_time": "15:00",
        "arrival_time": "18:00",
        "duration": "3 hours",
        "intermediate_stops": ["Sultanpur"],
        "facilities": {
            "restrooms": true
        },
        "food_options": {
            "catering_services": false
        },
        "train_status": {
            "current_location": "Sultanpur",
            "next_station": "Varanasi",
            "estimated_arrival_time_next_station": "18:00",
            "delay_status": "On time"
        },
        "weather_forecast": {
            "destination": "Varanasi",
            "forecast": "Sunny, temperature: 33°C"
        },
        "local_attractions": {
            "destination": "Varanasi",
            "attractions": ["Kashi Vishwanath Temple", "Dashashwamedh Ghat", "Sarnath"]
        }
    },
    {
        "train_no": "10111",
        "train_name": "Amritsar-Kolkata Express",
        "weekday_for_departure": ["Tuesday", "Saturday"],
        "starting_point": "Amritsar",
        "ending_point": "Kolkata",
        "departure_time": "16:30",
        "arrival_time": "10:30",
        "duration": "18 hours",
        "intermediate_stops": ["Ludhiana", "Delhi", "Kanpur", "Asansol"],
        "facilities": {
            "dining": true,
            "restrooms": true,
            "power_outlets": true
        },
        "food_options": {
            "catering_services": true,
            "menu_options": ["Punjabi Meal", "Bengali Meal", "Snacks", "Beverages"],
            "meal_timings": "Lunch: 13:00-15:00, Dinner: 20:00-22:00",
            "special_meals": false
        },
        "train_status": {
            "current_location": "Asansol",
            "next_station": "Kolkata",
            "estimated_arrival_time_next_station": "10:30",
            "delay_status": "On time"
        },
        "weather_forecast": {
            "destination": "Kolkata",
            "forecast": "Cloudy with occasional rain, temperature: 28°C"
        },
        "local_attractions": {
            "destination": "Kolkata",
            "attractions": ["Belur Math", "Science City Kolkata", "Eco Park"]
        }
    }

];


export default trainsData;

