const SupportAndBilling = () => {
  const invoices = [
    { id: 1, date: "2023-01-01", amount: "$100", status: "Paid" },
    { id: 2, date: "2023-02-01", amount: "$200", status: "Pending" },
    { id: 3, date: "2023-03-01", amount: "$300", status: "Overdue" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Support and Billing</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Contact Details</h2>
        <p>Email: support@example.com</p>
        <p>Phone: +1234567890</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Invoices</h2>
        <div className="space-y-4">
          {invoices.map((invoice) => (
            <div key={invoice.id} className="flex justify-between">
              <span>{invoice.date}</span>
              <span>{invoice.amount}</span>
              <span>{invoice.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportAndBilling;