const { findOne, insert } = require('./db');
const UTR_REGEX = /^[0-9]{12}$/;
function isValidTransactionRef(value) { return typeof value === 'string' && UTR_REGEX.test(value.trim()); }
async function createAppointmentBill({ patientId, doctorId, appointmentId, paymentMethod, transactionRef }) {
  const doctor = await findOne('doctors', { doctor_id: Number(doctorId) });
  const fee = doctor && doctor.consultation_fee != null ? Number(doctor.consultation_fee) : 500;
  const method = paymentMethod || 'Cash';
  let paymentStatus = 'Pending'; let ref = null;
  if (method === 'UPI') {
    if (!isValidTransactionRef(transactionRef)) {
      const err = new Error('Payment not verified. Please complete the payment via the QR code or UPI ID, then enter the 12-digit UPI transaction ID (UTR) from your UPI app.'); err.status = 400; throw err;
    }
    paymentStatus = 'Paid'; ref = transactionRef.trim();
  }
  const bill = await insert('billing', { patient_id:Number(patientId), appointment_id:appointmentId == null ? null:Number(appointmentId), description:'Consultation fee', amount:fee, payment_method:method, transaction_ref:ref, payment_status:paymentStatus, billing_date:new Date() }, 'bill_id');
  return { billId: bill.bill_id, amount: fee, paymentMethod: method, paymentStatus, transactionRef: ref };
}
module.exports = { createAppointmentBill, isValidTransactionRef, UTR_REGEX };
