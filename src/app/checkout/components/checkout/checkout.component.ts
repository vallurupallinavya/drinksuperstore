import { Component, inject } from '@angular/core';
import { loadStripe, Stripe, StripeElements, StripeCardElement } from '@stripe/stripe-js';
import { Functions, httpsCallable } from '@angular/fire/functions';  // Import Firebase Functions

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {

  stripe: Stripe | null = null;
  elements: StripeElements | null = null;
  card: StripeCardElement | null = null;

  // Inject Firebase Functions using Angular's inject function
  private functions = inject(Functions);

  async ngOnInit() {
    // Initialize Stripe.js with your public key
    this.stripe = await loadStripe('pk_test_51Q6zRJ08j24kfnWI5bVXBm9tGA5MvrHLNIycmTApAk0Erf2Odbr0DSJMdbhGgBdKoi3JsQTyODxnqSuOkPC0lwex00fD8Y20PO');
    if (this.stripe) {
      this.elements = this.stripe.elements();
      this.card = this.elements.create('card'); 
      console.log(this.card) // Create card element
      this.card.mount('#card-element');  // Mount card element into the DOM
    }
  }

  // Create Payment Intent via Firebase Callable Function
  async createPaymentIntent(amount: number) {
    const callable = httpsCallable(this.functions, 'createPaymentIntent');
    console.lo
  
    try {
      // Call Firebase function and await the response (which should contain client_secret)
      const response : any = await callable({ amount });
  
      // Log the response to see what you're getting from Firebase
      console.log('Firebase callable response:', response);
  
      if (this.stripe && this.card && response.data) {
        const clientSecret = response.data.clientSecret;
  
        // Log the Stripe instance, card element, and client secret for debugging
        console.log('Stripe instance:', this.stripe);
        console.log('Card element:', this.card);
        console.log('Client secret:', clientSecret);
  
        // Confirm the payment with Stripe
        const result = await this.stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: this.card,  // Pass the card element
          },
        });
  
        // Log the result of the payment confirmation
        console.log('Stripe payment result:', result);
  
        if (result.error) {
          console.error('Payment failed:', result.error.message);
        } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
          console.log('Payment successful!');
        }
      } else {
        console.error('Error: Stripe, card, or response.data is missing.');
      }
    } catch (error) {
      console.error('Error creating payment intent:', error);
    }
  }
  
  // Trigger the payment when the user submits the form
  onSubmit() {
    this.createPaymentIntent(5000);  // Example: Charge £50 (5000 pence)
  }
} 
