// external js file
// Write all JavaScript code here

// Logical operators - real world scenario/example

// check credit/loan eligibility - (if applicant have HIGH INCOME & GOOD CREDIT SCORE, he is eligible for credit/loan)
var isEarningHighIncome = true;
var isGoodCibilScore = false;
var isEligibleForLoan;

// check eligibility with && Logical AND operator
isEligibleForLoan = isEarningHighIncome && isGoodCibilScore;
alert('isEligibleForLoan: ' + isEligibleForLoan);

// check eligibility with || Logical OR operator
isEligibleForLoan = isEarningHighIncome || isGoodCibilScore;
alert('isEligibleForLoan: ' + isEligibleForLoan);

// ! Logical NOT
var isLoanRefused = !isEligibleForLoan;
alert('isLoanRefused: ' + isLoanRefused);
