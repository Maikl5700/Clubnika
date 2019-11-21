import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  colors
} from '@material-ui/core';

import { Label } from 'components';
import mockData from './data';

const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1150
  },
  methodCell: {
    width: 100
  },
  statusCell: {
    width: 64
  }
}));

const Logs = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [logs] = useState(mockData);

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Card>
        <CardHeader title="Customer logs" />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar options={{ suppressScrollY: true }}>
            <div className={classes.inner}>
              <Table>
                <TableBody>
                  {logs.map(log => (
                    <TableRow key={log.id}>
                      <TableCell className={classes.methodCell}>
                        <Typography variant="h6">{log.method}</Typography>
                      </TableCell>
                      <TableCell className={classes.statusCell}>
                        <Label
                          color={
                            log.status === 200
                              ? colors.green[600]
                              : colors.red[600]
                          }
                        >
                          {log.status}
                        </Label>
                      </TableCell>
                      <TableCell>{log.route}</TableCell>
                      <TableCell>{log.desc}</TableCell>
                      <TableCell align="right">{log.IP}</TableCell>
                      <TableCell align="right">
                        {log.created_at.format('YYYY/MM/DD | hh:mm:ss')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
      </Card>
    </div>
  );
};

Logs.propTypes = {
  className: PropTypes.string
};

export default Logs;
