var app = Vue.createApp({
    data() {
        return {
            seatStates: {
                sold: {
                    text: "sold",
                    color: "red"
                },
                available: {
                    text: "available",
                    color: "white"
                },
                booked: {
                    text: "booked",
                    color: "gray"
                },
                selected: {
                    text: "selected",
                    color: "green"
                }

            },
            seats: [{
                    name: "A1",
                    type: "available",
                    price: 500
                },
                {
                    name: "A2",
                    type: "available",
                    price: 500
                },
                {
                    name: "A3",
                    type: "available",
                    price: 500
                },
                {
                    name: "A4",
                    type: "available",
                    price: 500
                },
                {
                    name: "B1",
                    type: "available",
                    price: 500
                },
                {
                    name: "B2",
                    type: "available",
                    price: 500
                },
                {
                    name: "B3",
                    type: "available",
                    price: 500
                },
                {
                    name: "B4",
                    type: "available",
                    price: 500
                },
                {
                    name: "C1",
                    type: "available",
                    price: 500
                },
                {
                    name: "C2",
                    type: "available",
                    price: 500
                },
                {
                    name: "C3",
                    type: "available",
                    price: 500
                },
                {
                    name: "C4",
                    type: "available",
                    price: 500
                },
                {
                    name: "D1",
                    type: "available",
                    price: 500
                },
                {
                    name: "D2",
                    type: "available",
                    price: 500
                },
                {
                    name: "D3",
                    type: "available",
                    price: 500
                },
                {
                    name: "D4",
                    type: "available",
                    price: 500
                },
                {
                    name: "E1",
                    type: "available",
                    price: 500
                },
                {
                    name: "E2",
                    type: "available",
                    price: 500
                },
                {
                    name: "E3",
                    type: "available",
                    price: 500
                },
                {
                    name: "E4",
                    type: "available",
                    price: 500
                },
                {
                    name: "F1",
                    type: "available",
                    price: 500
                },
                {
                    name: "F2",
                    type: "available",
                    price: 500
                },
                {
                    name: "F3",
                    type: "available",
                    price: 500
                },
                {
                    name: "F4",
                    type: "available",
                    price: 500
                },
                {
                    name: "G1",
                    type: "available",
                    price: 500
                },
                {
                    name: "G2",
                    type: "available",
                    price: 500
                },
                {
                    name: "G3",
                    type: "available",
                    price: 500
                },
                {
                    name: "G4",
                    type: "available",
                    price: 500
                },
                {
                    name: "H1",
                    type: "available",
                    price: 500
                },
                {
                    name: "H2",
                    type: "available",
                    price: 500
                },
                {
                    name: "H3",
                    type: "available",
                    price: 500
                },
                {
                    name: "H4",
                    type: "available",
                    price: 500
                }
            ]
        };
    },
    methods: {

        handleClick(i) {
            let clickedSeat = this.seats[i];
            if (clickedSeat.type === 'sold' || clickedSeat.type === 'booked') {
                alert("you cannot this this seat");
                return;
            }

            if (this.selectedSeats.length > 2) {
                alert("Sorry you cannot select more than 3 seats");
            }
            clickedSeat.type = clickedSeat.type === "selected" ? "available" : "selected";
            console.log(clickedSeat);
        }
    },
    computed: {
        selectedSeats() {
            let selectedSeatCount = this.seats.filter((item) => item.type === "selected");
            // console.log(selectedSeatCount);
            return selectedSeatCount;
        }
    },
    watch: {

    }

});
app.mount("#app");