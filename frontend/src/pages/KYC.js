import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, CheckCircle } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const KYC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pan: '',
    dob: '',
    accountNumber: '',
    ifsc: '',
    accountHolder: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value.toUpperCase() }));
  };

  const validatePAN = (pan) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(pan);
  };

  const validateIFSC = (ifsc) => {
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    return ifscRegex.test(ifsc);
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.pan || !validatePAN(formData.pan)) {
        toast({
          title: 'Invalid PAN',
          description: 'Please enter a valid PAN number',
          variant: 'destructive',
        });
        return;
      }
      if (!formData.dob) {
        toast({
          title: 'Date of birth required',
          description: 'Please enter your date of birth',
          variant: 'destructive',
        });
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!formData.accountNumber || formData.accountNumber.length < 9) {
        toast({
          title: 'Invalid account number',
          description: 'Please enter a valid bank account number',
          variant: 'destructive',
        });
        return;
      }
      if (!formData.ifsc || !validateIFSC(formData.ifsc)) {
        toast({
          title: 'Invalid IFSC',
          description: 'Please enter a valid IFSC code',
          variant: 'destructive',
        });
        return;
      }
      if (!formData.accountHolder) {
        toast({
          title: 'Account holder name required',
          description: 'Please enter the account holder name',
          variant: 'destructive',
        });
        return;
      }
      setStep(3);
    }
  };

  const handleSubmit = () => {
    toast({
      title: 'KYC Submitted Successfully!',
      description: 'Welcome to ZaM! Your account is ready.',
    });
    setTimeout(() => {
      navigate('/explore');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-genzpink to-genzpurple text-white px-4 py-2 rounded-full mb-4">
            <Shield size={20} />
            <span className="font-semibold">Secure KYC</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-genzpink to-genzpurple bg-clip-text text-transparent">
              Complete Your Profile
            </span>
          </h1>
          <p className="text-gray-600">
            Just a few details to start your investment journey
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className={`flex items-center ${step >= 1 ? 'text-genzpink' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-genzpink text-white' : 'bg-gray-200'}`}>
              {step > 1 ? <CheckCircle size={20} /> : '1'}
            </div>
            <span className="ml-2 text-sm font-medium hidden sm:inline">PAN & DOB</span>
          </div>
          <div className={`w-16 h-1 mx-2 ${step >= 2 ? 'bg-genzpurple' : 'bg-gray-300'}`}></div>
          <div className={`flex items-center ${step >= 2 ? 'text-genzpurple' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-genzpurple text-white' : 'bg-gray-200'}`}>
              {step > 2 ? <CheckCircle size={20} /> : '2'}
            </div>
            <span className="ml-2 text-sm font-medium hidden sm:inline">Bank Details</span>
          </div>
          <div className={`w-16 h-1 mx-2 ${step >= 3 ? 'bg-genzpink' : 'bg-gray-300'}`}></div>
          <div className={`flex items-center ${step >= 3 ? 'text-genzpink' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-genzpink text-white' : 'bg-gray-200'}`}>
              {step > 3 ? <CheckCircle size={20} /> : '3'}
            </div>
            <span className="ml-2 text-sm font-medium hidden sm:inline">Verify</span>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h3>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  PAN Number
                </label>
                <input
                  type="text"
                  name="pan"
                  value={formData.pan}
                  onChange={handleChange}
                  maxLength="10"
                  placeholder="ABCDE1234F"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-genzpink focus:outline-none text-lg font-semibold uppercase"
                />
                <p className="text-xs text-gray-500 mt-1">Enter your 10-digit PAN number</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-genzpurple focus:outline-none text-lg font-semibold"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bank Account Details</h3>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Account Holder Name
                </label>
                <input
                  type="text"
                  name="accountHolder"
                  value={formData.accountHolder}
                  onChange={(e) => setFormData(prev => ({ ...prev, accountHolder: e.target.value }))}
                  placeholder="As per bank records"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-genzpink focus:outline-none text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Bank Account Number
                </label>
                <input
                  type="text"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  placeholder="1234567890123456"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-genzpurple focus:outline-none text-lg font-mono"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  IFSC Code
                </label>
                <input
                  type="text"
                  name="ifsc"
                  value={formData.ifsc}
                  onChange={handleChange}
                  maxLength="11"
                  placeholder="SBIN0001234"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-genzpink focus:outline-none text-lg font-mono uppercase"
                />
                <p className="text-xs text-gray-500 mt-1">11-digit IFSC code of your bank branch</p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-gradient-to-br from-genzpink to-genzpurple rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Almost There!</h3>
              <p className="text-gray-600 mb-6">Please verify the information you provided</p>
              
              <div className="bg-gray-50 rounded-xl p-6 text-left space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">PAN:</span>
                  <span className="font-semibold">{formData.pan}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date of Birth:</span>
                  <span className="font-semibold">{formData.dob}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Account Holder:</span>
                  <span className="font-semibold">{formData.accountHolder}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Account Number:</span>
                  <span className="font-semibold font-mono">****{formData.accountNumber.slice(-4)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">IFSC:</span>
                  <span className="font-semibold font-mono">{formData.ifsc}</span>
                </div>
              </div>

              <p className="text-xs text-gray-500">
                By submitting, you confirm that all information is accurate and consent to KYC verification
              </p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex space-x-4 mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all"
              >
                Back
              </button>
            )}
            <button
              onClick={step === 3 ? handleSubmit : handleNext}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-genzpink to-genzpurple text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              {step === 3 ? 'Submit & Start Investing' : 'Continue'}
            </button>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            <Shield size={16} className="inline mr-1" />
            Your data is encrypted and secure. We never share your information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KYC;