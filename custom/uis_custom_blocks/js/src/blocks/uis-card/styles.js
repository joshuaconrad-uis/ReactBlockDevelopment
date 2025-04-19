// ... existing code ...

export const styles = {
    // We'll add styles later as requested
    card: {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,       
        flexGrow: 0,
        width: '275px',
        height: '225px',
        maxWidth: '350px',
        maxHeight: '220px',
        padding: '15px'
    },
    header: {
        textAlign: 'center',
        margin: '10px 10px 10px 10px'
    },
    headerText: {
        fontSize: '12px', 
        color: 'lightGrey', 
        fontWeight: '500', 
        textTransform: 'uppercase',
        padding: '0 10px'
    },
    title: {
        textAlign: 'center',
        margin: '15px 15px 15px 15px',
        fontSize: '20px',
        padding: '0 10px'
    },
    content: { 
        textAlign: "center",
        fontSize: '18px',
        color: 'black',
        padding: '10px'
    },
    paragraph: {
        fontSize: '18px',
        color: 'grey',
        lineHeight: '1.5',
        padding: '0 15px'
    },
    cardLink: {
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
        height: '100%',
        width: '100%'
    },
    linkControl: {
        marginTop: '10px',
        padding: '0 10px'
    }

    // Grid container styles for the parent element
    // gridContainer: {
    //     display: 'grid',
    //     gridTemplateColumns: 'repeat(3, 1fr)',
    //     gap: '20px',
    //     width: `fit-content`,
    //     maxWidth :  '100%'
    // }
};