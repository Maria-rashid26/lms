import React, { useState } from 'react';
import { Box, IconButton, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" sx={{ gap: 1, marginTop: 2 }}>
      <IconButton onClick={handlePrev} disabled={currentPage === 1} sx={{ color: currentPage === 1 ? '#ccc' : '#000' }}>
        <ArrowBackIosIcon />
      </IconButton>

      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index}
          onClick={() => handlePageClick(index + 1)}
          variant={currentPage === index + 1 ? 'contained' : 'outlined'}
          sx={{
            minWidth: 40,
            padding: '4px 8px',
            borderRadius: '4px',
            backgroundColor: currentPage === index + 1 ? '#003366' : '#fff',
            color: currentPage === index + 1 ? '#fff' : '#000',
            borderColor: '#ccc',
            '&:hover': {
              backgroundColor: currentPage === index + 1 ? '#003366' : '#f0f0f0',
            },
          }}
        >
          {index + 1}
        </Button>
      ))}

      <IconButton onClick={handleNext} disabled={currentPage === totalPages} sx={{ color: currentPage === totalPages ? '#ccc' : '#000' }}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Pagination;
