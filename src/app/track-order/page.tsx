'use client';

import React, { useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import { useQuery } from '@tanstack/react-query';
import { fetchDealsByNameApi, fetchDealsByEmailApi, Deal } from '@/src/api/hubspotApi';
import SearchBar from './SearchBar';
import DealList from './DealList';
import EmptyState from './EmptyState';

export default function TrackOrderPage() {
  const [nameInput, setNameInput] = useState('');
  const [dealName, setDealName] = useState('');

  const [emailInput, setEmailInput] = useState('');
  const [email, setEmail] = useState('');

  const {
    data: dealsByName, isLoading: loadingName,
    isError: errorName, isFetched: fetchedName,
  } = useQuery<Deal[]>({
    queryKey: ['deals-by-name', dealName],
    queryFn: () => fetchDealsByNameApi(dealName),
    enabled: !!dealName,
    retry: false,
  });

  const {
    data: dealsByEmail, isLoading: loadingEmail,
    isError: errorEmail, isFetched: fetchedEmail,
  } = useQuery<Deal[]>({
    queryKey: ['deals-by-email', email],
    queryFn: () => fetchDealsByEmailApi(email),
    enabled: !!email,
    retry: false,
  });

  return (
    <Box sx={{ maxWidth: 960, mx: 'auto', px: { xs: 2, md: 4 }, py: 6 }}>

      {/* ── HEADER ── */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
        <Box sx={{ width: 48, height: 48, bgcolor: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LocalShippingIcon sx={{ color: '#fff', fontSize: 26 }} />
        </Box>
        <Typography variant="h4" sx={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: 1 }}>
          Track Your Order
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, ml: '64px' }}>
        Search by order reference or email address to view status and line items.
      </Typography>

      {/* ── BY ORDER REFERENCE ── */}
      <Typography variant="caption" sx={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: 1, color: 'text.secondary', display: 'block', mb: 1 }}>
        Search by Order Reference
      </Typography>
      <SearchBar
        value={nameInput}
        onChange={setNameInput}
        onSearch={() => { if (nameInput.trim()) setDealName(nameInput.trim()); }}
        loading={loadingName}
        placeholder="e.g. VN-1002"
        icon={<SearchIcon sx={{ color: 'text.secondary' }} />}
      />
      {errorName && <EmptyState term={dealName} isError />}
      {fetchedName && !loadingName && !errorName && dealsByName?.length === 0 && <EmptyState term={dealName} />}
      {dealsByName && dealsByName.length > 0 && <DealList deals={dealsByName} />}

      <Divider sx={{ my: 5 }} />

      {/* ── BY EMAIL ── */}
      <Typography variant="caption" sx={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: 1, color: 'text.secondary', display: 'block', mb: 1 }}>
        Search by Email Address
      </Typography>
      <SearchBar
        value={emailInput}
        onChange={setEmailInput}
        onSearch={() => { if (emailInput.trim()) setEmail(emailInput.trim()); }}
        loading={loadingEmail}
        placeholder="e.g. customer@example.com"
        icon={<EmailIcon sx={{ color: 'text.secondary' }} />}
      />
      {errorEmail && <EmptyState term={email} isError />}
      {fetchedEmail && !loadingEmail && !errorEmail && dealsByEmail?.length === 0 && <EmptyState term={email} />}
      {dealsByEmail && dealsByEmail.length > 0 && <DealList deals={dealsByEmail} />}

    </Box>
  );
}