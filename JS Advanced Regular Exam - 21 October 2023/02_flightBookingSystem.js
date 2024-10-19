class FlightBookingSystem {
    agencyName;
    flights;
    bookings;
    bookingsCount;
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        price = Number(price);
        if (this.flights.find(curEl => curEl.flightNumber == flightNumber)) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }

        this.flights.push({ flightNumber, destination, departureTime, price });
        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }

    bookFlight(passengerName, flightNumber) {
        if (!(this.flights.find(curEl => curEl.flightNumber == flightNumber))) {
            return `Flight ${flightNumber} is not available for booking.`;
        }

        this.bookings.push({ passengerName, flightNumber });
        this.bookingsCount += 1;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking(passengerName, flightNumber) {
        let curObj = this.bookings.find(curEl => curEl.passengerName == passengerName && curEl.flightNumber == flightNumber);
        if (!curObj) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }

        let indexOf = this.bookings.findIndex(curEl => curEl == curObj);
        if (indexOf == -1) {
            return;
        }
        this.bookings.splice(indexOf, 1);
        this.bookingsCount -= 1;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings(criteria) {
        if (this.bookings.length <= 0) {
            throw new Error('No bookings have been made yet.');
        }

        let arr = [];
        if (criteria == 'all') {
            arr.push(`All bookings(${this.bookingsCount}):`);
            for (const curEl of this.bookings) {
                arr.push(`${curEl.passengerName} booked for flight ${curEl.flightNumber}.`);
            }
            return arr.join('\n').trim();
        }
        else if (criteria == 'cheap') {
            let cheapArr = this.flights.filter(curEl => curEl.price <= 100);
            if (cheapArr.length === 0) {
                return 'No cheap bookings found.';
            }
            arr.push('Cheap bookings:');
            for (const curEl of cheapArr) {
                let obj = this.bookings.find(el => el.flightNumber == curEl.flightNumber);
                if (obj) {  // Only push if a booking exists
                    arr.push(`${obj.passengerName} booked for flight ${curEl.flightNumber}.`);
                }
            }
            return arr.join('\n').trim();
        }

        else if (criteria == 'expensive') {
            let expensiveArr = this.flights.filter(curEl => curEl.price > 100);
            if (expensiveArr.length === 0) {
                return 'No expensive bookings found.';
            }
            arr.push('Expensive bookings:');
            for (const curEl of expensiveArr) {
                let obj = this.bookings.find(el => el.flightNumber == curEl.flightNumber);
                if (obj) {
                    arr.push(`${obj.passengerName} booked for flight ${curEl.flightNumber}.`);
                }
            }
            return arr.join('\n').trim();
        }
        else {
            throw new Error("Invalid criteria.");
        }
    }
}
const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));

