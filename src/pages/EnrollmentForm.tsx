import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChefHat, Upload } from 'lucide-react';
// @ts-ignore: No type definitions for react-google-recaptcha
import ReCAPTCHA from 'react-google-recaptcha';
import logoImage from '../assets/Earlybee-Logo-revamp-e1750946982329.png';

interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  address: string;
  lga: string;
  state: string;
  
  // Business Information
  businessName: string;
  businessType: string;
  businessRegistered: string;
  registrationNumber?: string;
  businessStage: string;
  currentRevenue: string;
  businessDescription: string;
  yearsInBusiness: string;
  employeeCount: string;
  
  // Program Specific
  motivationLetter: string;
  challenges: string[];
  goals: string[];
  commitmentLevel: string;
  previousTraining: string;
  referralSource: string;
  
  // Additional
  hasLaptop: string;
  internetAccess: string;
  agreeToTerms: boolean;
}

const EnrollmentForm: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [applicationRef, setApplicationRef] = useState(`EB-BSEP-${Math.random().toString(36).substring(2, 8).toUpperCase()}`);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    address: '',
    lga: '',
    state: 'Lagos',
    businessName: '',
    businessType: '',
    businessRegistered: '',
    registrationNumber: '',
    businessStage: '',
    currentRevenue: '',
    businessDescription: '',
    yearsInBusiness: '',
    employeeCount: '',
    motivationLetter: '',
    challenges: [],
    goals: [],
    commitmentLevel: '',
    previousTraining: '',
    referralSource: '',
    hasLaptop: '',
    internetAccess: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [toast, setToast] = useState<{ message: string; type: 'error' | 'success' | '' }>({ message: '', type: '' });
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Toast handler
  const showToast = (message: string, type: 'error' | 'success' = 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: '', type: '' }), 4000);
  };

  const businessTypes = [
    'Restaurant/Eatery',
    'Catering Services',
    'Food Truck/Mobile Food',
    'Bakery',
    'Packaged Food Production',
    'Food Delivery Service',
    'Grocery/Food Retail',
    'Food Processing',
    'Other'
  ];

  const businessStages = [
    'Idea Stage (Planning)',
    'Startup (Less than 1 year)',
    'Growth Stage (1-3 years)',
    'Established (3+ years)',
    'Looking to Pivot/Expand'
  ];

  const challengeOptions = [
    'Access to capital/funding',
    'Marketing and customer acquisition',
    'Food safety and regulations',
    'Scaling operations',
    'Digital technology adoption',
    'Supply chain management',
    'Financial management',
    'Staff training and management'
  ];

  const goalOptions = [
    'Increase revenue significantly',
    'Expand to new locations',
    'Launch online presence',
    'Improve operational efficiency',
    'Get proper business registration',
    'Access funding opportunities',
    'Build a strong brand',
    'Create sustainable growth'
  ];

  // Validation logic for each step
  const validateStep = () => {
    const newErrors: { [key: string]: string } = {};
    if (currentStep === 1) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      if (!formData.age) newErrors.age = 'Age is required';
      if (!formData.gender) newErrors.gender = 'Gender is required';
      if (!formData.address) newErrors.address = 'Address is required';
      if (!formData.lga) newErrors.lga = 'LGA is required';
      if (!formData.state) newErrors.state = 'State is required';
    } else if (currentStep === 2) {
      if (!formData.businessName) newErrors.businessName = 'Business name is required';
      if (!formData.businessType) newErrors.businessType = 'Business type is required';
      if (!formData.businessRegistered) newErrors.businessRegistered = 'Business registration status is required';
      if (!formData.businessStage) newErrors.businessStage = 'Business stage is required';
      if (!formData.businessDescription) newErrors.businessDescription = 'Business description is required';
    } else if (currentStep === 3) {
      if (!formData.motivationLetter) newErrors.motivationLetter = 'Motivation is required';
      if (!formData.challenges.length) newErrors.challenges = 'Select at least one challenge';
      if (!formData.goals.length) newErrors.goals = 'Select at least one goal';
      if (!formData.commitmentLevel) newErrors.commitmentLevel = 'Commitment is required';
    } else if (currentStep === 4) {
      if (!formData.referralSource) newErrors.referralSource = 'Referral source is required';
      if (!formData.hasLaptop) newErrors.hasLaptop = 'Laptop/computer info is required';
      if (!formData.internetAccess) newErrors.internetAccess = 'Internet access info is required';
      if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handleArrayToggle = (field: 'challenges' | 'goals', value: string) => {
    const currentArray = formData[field];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    
    handleInputChange(field, newArray);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      showToast('Please complete the reCAPTCHA', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const form = new FormData();
      
      // Add application reference FIRST
      form.append('applicationReference', applicationRef);
      
      // DEBUG: Log what we're sending
      console.log('=== SENDING FORM DATA ===');
      console.log('Application Reference:', applicationRef);
      console.log('Form Data:', formData);
      
      // Add all other form data
      form.append('firstName', formData.firstName);
      form.append('lastName', formData.lastName);
      form.append('email', formData.email);
      form.append('phone', formData.phone);
      form.append('age', formData.age);
      form.append('gender', formData.gender);
      form.append('address', formData.address);
      form.append('lga', formData.lga);
      form.append('state', formData.state);
      form.append('businessName', formData.businessName);
      form.append('businessType', formData.businessType);
      form.append('businessRegistered', formData.businessRegistered);
      form.append('registrationNumber', formData.registrationNumber || '');
      form.append('businessStage', formData.businessStage);
      form.append('currentRevenue', formData.currentRevenue);
      form.append('businessDescription', formData.businessDescription);
      form.append('yearsInBusiness', formData.yearsInBusiness);
      form.append('employeeCount', formData.employeeCount);
      form.append('motivationLetter', formData.motivationLetter);
      form.append('challenges', formData.challenges.join(', '));
      form.append('goals', formData.goals.join(', '));
      form.append('commitmentLevel', formData.commitmentLevel);
      form.append('previousTraining', formData.previousTraining);
      form.append('referralSource', formData.referralSource);
      form.append('hasLaptop', formData.hasLaptop);
      form.append('internetAccess', formData.internetAccess);
      form.append('agreeToTerms', formData.agreeToTerms.toString());

      console.log('FormData entries:');
      for (let [key, value] of form.entries()) {
        console.log(key + ':', value);
      }

      const response = await fetch('https://script.google.com/macros/s/AKfycbwuH_tdLTB0YSh1R-fknaW_SI-8CphbXYjHXRvpkrdsPrjbmT5AshoNF-WfmyhTo6xQRg/exec', {
        method: 'POST',
        body: form
      });

      const result = await response.json();
      console.log('Response from server:', result);
      
      if (result.result === 'error') {
        if (result.error === 'duplicate_application') {
          showToast('An application with this email already exists. Please contact us if you need to update your application.', 'error');
        } else {
          showToast('Submission failed. Please try again.', 'error');
        }
        return;
      }

      // Success - navigate to thank you page
      navigate('/thank-you', { state: { applicationRef } });
      
    } catch (error) {
      console.log('❌ FORM SUBMISSION ERROR:', error);
      showToast('Submission failed. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (validateStep() && currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const stepTitles = [
    'Personal Information',
    'Business Details',
    'Program Goals',
    'Final Details'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-8 overflow-x-hidden">
      {/* Toast Notification */}
      {toast.message && (
        <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg text-white text-center transition-all duration-300
          ${toast.type === 'error' ? 'bg-red-600' : 'bg-green-600'}`}
        >
          {toast.message}
        </div>
      )}
      {/* Header */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-between">
          <img src={logoImage} alt="EarlyBee Logo" className="h-20 w-auto" />
          
          <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-[#C9A14A] transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Apply to EarlyBee BSEP</h1>
            <div className="flex flex-col items-end">
              <span className="text-gray-500 text-sm sm:text-base">Step {currentStep} of 4</span>
              <span className="text-xs text-gray-400 font-mono">Ref: {applicationRef}</span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex-1">
                <div className={`h-3 rounded-full ${
                  step <= currentStep ? 'bg-[#C9A14A]' : 'bg-gray-200'
                } transition-colors duration-300`}></div>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">{stepTitles[step - 1]}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-4 sm:p-8">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
              
              {/* Application Reference */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <label className="block text-gray-700 font-medium mb-2">Application Reference Number</label>
                <input
                  type="text"
                  value={applicationRef}
                  readOnly
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 font-mono font-bold cursor-not-allowed"
                  style={{ backgroundColor: '#f8f9fa' }}
                />
                <p className="text-sm text-gray-600 mt-2">Please save this reference number for your records</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="+234 800 000 0000"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Age *</label>
                  <select
                    required
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select your age range</option>
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36-45">36-45</option>
                    <option value="46-55">46-55</option>
                    <option value="55+">55+</option>
                  </select>
                  {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Gender *</label>
                  <select
                    required
                    value={formData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                  {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Address *</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Enter your full address"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Local Government Area *</label>
                  <input
                    type="text"
                    required
                    value={formData.lga}
                    onChange={(e) => handleInputChange('lga', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="e.g., Kosofe, Alimosho, etc."
                  />
                  {errors.lga && <p className="text-red-500 text-sm mt-1">{errors.lga}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">State *</label>
                  <select
                    required
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="Lagos">Lagos</option>
                    <option value="Ogun">Ogun</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Business Information */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Details</h2>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Business Name *</label>
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Enter your business name or 'Not Yet Named'"
                />
                {errors.businessName && <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Business Type *</label>
                  <select
                    required
                    value={formData.businessType}
                    onChange={(e) => handleInputChange('businessType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select business type</option>
                    {businessTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.businessType && <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Is your business registered with CAC? *</label>
                  <select
                    required
                    value={formData.businessRegistered}
                    onChange={(e) => handleInputChange('businessRegistered', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {errors.businessRegistered && <p className="text-red-500 text-sm mt-1">{errors.businessRegistered}</p>}
                </div>
              </div>
              {/* Conditional registration number input */}
              {formData.businessRegistered === 'Yes' && (
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">Enter registration number</label>
                  <input
                    type="text"
                    value={formData.registrationNumber}
                    onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="e.g., RC1234567"
                  />
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Business Stage *</label>
                  <select
                    required
                    value={formData.businessStage}
                    onChange={(e) => handleInputChange('businessStage', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select business stage</option>
                    {businessStages.map(stage => (
                      <option key={stage} value={stage}>{stage}</option>
                    ))}
                  </select>
                  {errors.businessStage && <p className="text-red-500 text-sm mt-1">{errors.businessStage}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Current Monthly Revenue</label>
                  <select
                    value={formData.currentRevenue}
                    onChange={(e) => handleInputChange('currentRevenue', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select revenue range</option>
                    <option value="₦0 (No revenue yet)">₦0 (No revenue yet)</option>
                    <option value="₦1 - ₦50,000">₦1 - ₦50,000</option>
                    <option value="₦50,001 - ₦100,000">₦50,001 - ₦100,000</option>
                    <option value="₦100,001 - ₦250,000">₦100,001 - ₦250,000</option>
                    <option value="₦250,001 - ₦500,000">₦250,001 - ₦500,000</option>
                    <option value="₦500,001+">₦500,001+</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Years in Business</label>
                  <select
                    value={formData.yearsInBusiness}
                    onChange={(e) => handleInputChange('yearsInBusiness', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select years</option>
                    <option value="Less than 1 year">Less than 1 year</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5+ years">5+ years</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Number of Employees</label>
                  <select
                    value={formData.employeeCount}
                    onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select employee count</option>
                    <option value="Just me">Just me</option>
                    <option value="1-2 employees">1-2 employees</option>
                    <option value="3-5 employees">3-5 employees</option>
                    <option value="6-10 employees">6-10 employees</option>
                    <option value="10+ employees">10+ employees</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Describe Your Business *</label>
                <textarea
                  required
                  value={formData.businessDescription}
                  onChange={(e) => handleInputChange('businessDescription', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Tell us about your food business, what you do, your target customers, and what makes you unique..."
                />
                {errors.businessDescription && <p className="text-red-500 text-sm mt-1">{errors.businessDescription}</p>}
              </div>
            </div>
          )}

          {/* Step 3: Program Goals */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Goals & Expectations</h2>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Why do you want to join the BSEP? *</label>
                <textarea
                  required
                  value={formData.motivationLetter}
                  onChange={(e) => handleInputChange('motivationLetter', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Share your motivation and what you hope to achieve through this program..."
                />
                {errors.motivationLetter && <p className="text-red-500 text-sm mt-1">{errors.motivationLetter}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-4">What are your biggest business challenges? (Select all that apply) *</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {challengeOptions.map(challenge => (
                    <label key={challenge} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.challenges.includes(challenge)}
                        onChange={() => handleArrayToggle('challenges', challenge)}
                        className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <span className="text-gray-700">{challenge}</span>
                    </label>
                  ))}
                </div>
                {errors.challenges && <p className="text-red-500 text-sm mt-1">{errors.challenges}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-4">What are your main business goals? (Select all that apply) *</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {goalOptions.map(goal => (
                    <label key={goal} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.goals.includes(goal)}
                        onChange={() => handleArrayToggle('goals', goal)}
                        className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <span className="text-gray-700">{goal}</span>
                    </label>
                  ))}
                </div>
                {errors.goals && <p className="text-red-500 text-sm mt-1">{errors.goals}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Are you ready to commit 2 hours per day thrice a week? *</label>
                <select
                  required
                  value={formData.commitmentLevel}
                  onChange={(e) => handleInputChange('commitmentLevel', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                >
                  <option value="">Select option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                {errors.commitmentLevel && <p className="text-red-500 text-sm mt-1">{errors.commitmentLevel}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Previous Business Training</label>
                <textarea
                  value={formData.previousTraining}
                  onChange={(e) => handleInputChange('previousTraining', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Have you attended any business training programs before? If yes, please describe..."
                />
              </div>
            </div>
          )}

          {/* Step 4: Final Details */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Final Details</h2>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">How did you hear about EarlyBee? *</label>
                <select
                  required
                  value={formData.referralSource}
                  onChange={(e) => handleInputChange('referralSource', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                >
                  <option value="">Select source</option>
                  <option value="Social Media (Facebook, Instagram, Twitter)">Social Media (Facebook, Instagram, Twitter)</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Friend/Family Referral">Friend/Family Referral</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Local Community/Event">Local Community/Event</option>
                  <option value="Previous EarlyBee Graduate">Previous EarlyBee Graduate</option>
                  <option value="Other">Other</option>
                </select>
                {errors.referralSource && <p className="text-red-500 text-sm mt-1">{errors.referralSource}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Do you have a laptop/computer? *</label>
                  <select
                    required
                    value={formData.hasLaptop}
                    onChange={(e) => handleInputChange('hasLaptop', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select option</option>
                    <option value="Yes, I have a laptop">Yes, I have a laptop</option>
                    <option value="Yes, I have a desktop computer">Yes, I have a desktop computer</option>
                    <option value="No, but I can get access to one">No, but I can get access to one</option>
                    <option value="No, I don't have access">No, I don't have access</option>
                  </select>
                  {errors.hasLaptop && <p className="text-red-500 text-sm mt-1">{errors.hasLaptop}</p>}
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Do you have reliable internet access? *</label>
                  <select
                    required
                    value={formData.internetAccess}
                    onChange={(e) => handleInputChange('internetAccess', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select option</option>
                    <option value="Yes, excellent connection">Yes, excellent connection</option>
                    <option value="Yes, good connection">Yes, good connection</option>
                    <option value="Sometimes unstable">Sometimes unstable</option>
                    <option value="No reliable internet">No reliable internet</option>
                  </select>
                  {errors.internetAccess && <p className="text-red-500 text-sm mt-1">{errors.internetAccess}</p>}
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Program Terms & Conditions</h3>
                <div className="space-y-2 text-sm text-gray-700 mb-4">
                  <p>• The EarlyBee BSEP is a 3-week intensive training program</p>
                  <p>• Attendance is mandatory for all sessions (minimum 80% attendance required to pitch)</p>
                  <p>• The program is completely free with no hidden costs</p>
                  <p>• You'll be required to complete assessments throughout the program</p>
                  <p>• Graduates become part of our alumni network with ongoing support</p>
                  <p>• We may feature successful graduates in our marketing materials and social media platforms (with consent)</p>
                </div>
                
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreeToTerms}
                    onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                    className="w-5 h-5 text-orange-500 border-gray-300 rounded focus:ring-orange-500 mt-0.5"
                  />
                  <span className="text-gray-700">
                    I agree to the terms and conditions of the EarlyBee Food Business Program and understand the commitment required. *
                  </span>
                </label>
                {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col items-center mt-8 pt-6 border-t border-gray-200">
            <div className="mb-4 w-full flex justify-center">
              <ReCAPTCHA
                sitekey="6Lfn_pArAAAAAF-tilVdnxUCPeEv4HS_80b2z2oK"
                onChange={(token: string | null) => setRecaptchaToken(token)}
              />
            </div>
            <div className="flex flex-col sm:flex-row w-full gap-4 sm:justify-between">
              <button
                type="button"
                onClick={prevStep}
                className={`px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                disabled={currentStep === 1}
              >
                Previous
              </button>
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-black text-white px-4 sm:px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors text-sm sm:text-base"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 sm:px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </div>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;