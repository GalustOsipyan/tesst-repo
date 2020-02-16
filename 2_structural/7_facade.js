class Complaints {
  constructor() {
    this.complaints = [];
  }

  reply(complaint) {

  }

  add(complaint) {
    this.complaints.push(complaint);
    return this.reply(complaint);
  }

}

class ProductComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`;
  }
}

class ServiceComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`;
  }
}

class ComplaintRegistry {
  register(customer, type, details) {
    const id = Date.now();
    let complaint;

    type === 'service' ?
      complaint = new ServiceComplaints() :
      complaint = new ProductComplaints();


    return complaint.add({ id, customer, details });
  }
}

const registry = new ComplaintRegistry();
console.log(registry.register('John', 'service', 'unreachable'));
console.log(registry.register('Helen', 'product', 'error'));