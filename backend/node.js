function calculateSalary(basic) {
  const pf = basic * 0.12;     // 12% PF
  const tax = basic * 0.02;   // 2% tax
  const net = basic - pf - tax;

  return {
    basic,
    pf,
    tax,
    net
  };
}
