import { Slider } from './Slider';
import { X } from 'lucide-react';
import { selectEMICalculations, selectEMIState, setDownPaymentPercent, setInterestRate, setLoanTenure } from '../../../store/emiSlice';
import { useDispatch, useSelector } from 'react-redux';

export function EMICalculatorModal({ isOpen, onClose }) {


    const dispatch = useDispatch();

  const {
    motorcyclePrice,
    downPaymentPercent,
    loanTenure,
    interestRate,
  } = useSelector(selectEMIState);

  const { downPaymentAmount, loanAmount, emi } =
    useSelector(selectEMICalculations);

    console.log("EMI Calculations:", {
      motorcyclePrice,
      downPaymentPercent,emi});

  if (!isOpen) return null;

 

  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-[16px] w-full max-w-[360px] max-h-[90vh] overflow-y-auto">
          <div className="flex flex-col gap-[24px] p-[16px] pt-[20px]">
            {/* Header */}
            <div className="flex items-center justify-between w-full">
              <h1 className="font-flea_bold text-[24px] leading-[33.196px] text-black font-bold">
                EMI CALCULATOR
              </h1>
              <button 
                onClick={onClose}
                className="w-5 h-5 flex items-center justify-center hover:opacity-70 transition-opacity"
              >
                <X className="w-5 h-5" strokeWidth={1.6} />
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-[32px] w-full">
              {/* Sliders Section */}
              <div className="flex flex-col gap-[20px] w-full">
                {/* Down Payment Slider */}
                <Slider
                  label="Down payment (In %)"
                  value={downPaymentPercent}
                  onChange={(v) => dispatch(setDownPaymentPercent(v))}
                  min={0}
                  max={90}
                  step={1}
                  marks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90]}
                />

                {/* Loan Tenure Slider */}
                <Slider
                  label="Loan tenure (In months)"
                   value={loanTenure}
              onChange={(v) => dispatch(setLoanTenure(v))}
                  min={6}
                  max={60}
                  step={6}
                  marks={[6, 12, 18, 24, 30, 36, 42, 48, 54, 60]}
                />

                {/* Interest Rate Slider */}
                <Slider
                  label="Rate of interest (In %)"
                   value={interestRate}
              onChange={(v) => dispatch(setInterestRate(v))}
                  min={5}
                  max={30}
                  step={1}
                  marks={[5, 10, 15, 20, 25, 30]}
                />
              </div>

              {/* EMI Details Section */}
              <div className="flex flex-col gap-[8px] w-full">
                <div className="flex flex-col gap-[8px] leading-[0]">
                  <h2 className="font-flea_bold text-[20px] leading-[20px] text-black tracking-[-0.4px]">
                    EMI DETAILS
                  </h2>
                  <p className="font-interMedium text-[#999] text-[12px] leading-[16px] tracking-[0.24px]">
                    Indicative and final EMI will depend upon the financier and your CIBIL score.
                  </p>
                </div>

                {/* Details Card */}
                <div className="bg-white border border-[#d9d9d9] rounded-[12px] p-[16px]">
                  <div className="flex flex-col gap-[8px] w-full">
                    {/* Motorcycle Price */}
                    <div className="flex flex-col gap-[12px]">
                      <div className="flex items-center justify-between w-full">
                        <p className="font-interRegular text-[#666] text-[14px] leading-[16px]">
                          Motorcycle price
                        </p>
                        <p className="font-interSemiBold text-[#333] text-[14px] leading-[22px] tracking-[-0.4px]">
                          {formatCurrency(motorcyclePrice)}
                        </p>
                      </div>
                      <div className="h-0 w-full">
                        <svg className="block w-full h-px" fill="none" viewBox="0 0 278 1">
                          <line stroke="#E5E5E5" strokeDasharray="6 6" strokeLinecap="round" x1="0.5" x2="277.5" y1="0.5" y2="0.5" />
                        </svg>
                      </div>
                    </div>

                    {/* Down Payment */}
                    <div className="flex flex-col gap-[12px]">
                      <div className="flex items-center justify-between w-full">
                        <p className="font-interRegular text-[#666] text-[14px] leading-[16px]">
                          Down payment
                        </p>
                        <p className="font-interSemiBold text-[#333] text-[14px] leading-[22px] tracking-[-0.4px]">
                          {formatCurrency(downPaymentAmount)}
                        </p>
                      </div>
                      <div className="h-0 w-full">
                        <svg className="block w-full h-px" fill="none" viewBox="0 0 278 1">
                          <line stroke="#E5E5E5" strokeDasharray="6 6" strokeLinecap="round" x1="0.5" x2="277.5" y1="0.5" y2="0.5" />
                        </svg>
                      </div>
                    </div>

                    {/* Loan Amount */}
                    <div className="flex flex-col gap-[12px]">
                      <div className="flex items-center justify-between w-full">
                        <p className="font-interRegular text-[#666] text-[14px] leading-[16px]">
                          Loan amount
                        </p>
                        <p className="font-interSemiBold text-[#333] text-[14px] leading-[22px] tracking-[-0.4px]">
                          {formatCurrency(loanAmount)}
                        </p>
                      </div>
                      <div className="h-0 w-full">
                        <svg className="block w-full h-px" fill="none" viewBox="0 0 278 1">
                          <line stroke="#E5E5E5" strokeLinecap="round" x1="0.5" x2="277.5" y1="0.5" y2="0.5" />
                        </svg>
                      </div>
                    </div>

                    {/* Monthly EMI */}
                    <div className="flex items-center justify-between w-full">
                      <p className="font-interMedium text-black text-[14px] leading-[16px]">
                        Monthly EMI
                      </p>
                      <p className="font-interBold text-black text-[16px] leading-[22px] tracking-[-0.4px]">
                        {formatCurrency(emi)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
