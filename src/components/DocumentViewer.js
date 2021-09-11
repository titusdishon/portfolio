import React, {useState} from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import Modal from '@material-ui/core/Modal';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles,createStyles, Typography} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const useStyles = makeStyles((theme)=>createStyles({
     root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
      color: theme.palette.grey[500],
    cursor:'pointer',
    },
    arrows: {
          cursor:'pointer',
  }
}))

const DocumentViewer = ({ source, open, handleClose }) => {
      const [numPages, setNumPages] = useState(null);
      const [pageNumber, setPageNumber] = useState(1);
    const classes = useStyles();
    if (!source) {
        return <div>Loading, please wait.........</div>
    }
    const  onDocumentLoadSuccess=({ numPages })=>{
    setNumPages(numPages);
    }
    const nextPage = () => {
        if ((pageNumber + 1) > numPages) {
            setPageNumber(1)
        } else {
            setPageNumber(pageNumber+1)
        }
    }
    const prevPage = () => {
        if (pageNumber > 1 && pageNumber!==1) {
            setPageNumber(pageNumber-1)
        } else {
            setPageNumber(numPages)
        }
    }

    return (
    <Dialog
        open={open}
        TransitionComponent={Transition}
            keepMounted
            maxWidth="lg"
        onClose={handleClose}
        >
            <DialogTitle>
                {pageNumber!==1&&<Typography variant="h5">
                    Titus Mutiso Dishon - Resume
                </Typography>}
                <CloseIcon  className={classes.closeButton} onClick={handleClose}/>
        </DialogTitle>
       <Document
        className="document-container"
        file="TITUS_DISHON_Resume.pdf"
        externalLinkTarget="_self"
        onLoadSuccess={onDocumentLoadSuccess}
      >
      <Page pageNumber={pageNumber} />
            </Document>
            <DialogActions>
                <p>Page {pageNumber} of {numPages}</p>
                <ArrowBackIosIcon onClick={prevPage} className={classes.arrows}/>
                <ArrowForwardIosIcon onClick={nextPage}  className={classes.arrows}/>
            </DialogActions>
      </Dialog>
    )
}

export default DocumentViewer
