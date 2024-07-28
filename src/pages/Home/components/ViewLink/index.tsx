import { Card, CardContent, Link, Typography } from '@mui/material';

interface IViewLinkProps {
  shortUrl: string;
}

export const ViewLink = ({ shortUrl = '' }: IViewLinkProps) => (
  <Card
    sx={{
      minWidth: 275,
      marginTop: '8px',
    }}
  >
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Short Link
      </Typography>
      <Link href={shortUrl} target="_blank" rel="noopener noreferrer">
        {shortUrl}
      </Link>
    </CardContent>
  </Card>
);
