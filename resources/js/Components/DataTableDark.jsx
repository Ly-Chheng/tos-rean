export default function DarkDataTable(isDarkMode) {
  return {
    table: {
      style: {
        borderRadius: "0", 
        boxShadow: "none",
        backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
      },
    },
    headCells: {
      style: {
        backgroundColor: isDarkMode ? "#374151" : "#F5F5F5",
        color: isDarkMode ? "#d1d5db" : "#1f2937", 
        fontSize: "14px",
        fontWeight: "600",
        padding: "12px 16px",
        lineHeight: "1.25rem",
        textTransform: "none",
      },
    },
    cells: {
      style: {
        color: isDarkMode ? "#d1d5db" : "#1f2937", 
        fontSize: "14px",
        padding: "4px 16px",
        lineHeight: "1.25rem",
      },
    },
    rows: {
      style: {
        backgroundColor: isDarkMode ? "#1f2937" : "#ffffff", 
        minHeight: "48px",
        transition: "background-color 0.2s ease",
        "&:hover": {
          backgroundColor: isDarkMode ? "#374151" : "#f3f4f6",
        },
      },
    },
    pagination: {
      style: {
        borderTop: isDarkMode ? "1px solid #374151" : "1px solid #e5e7eb", 
        padding: "16px",
        backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
        color: isDarkMode ? "#d1d5db" : "#1f2937", 
      },
    },
  };
}