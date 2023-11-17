import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  data = {
    '62a03e11ae8872346d12928e': [
      {
        _id: '6555eb24665ea88a9f9db7fc',
        totalCost: 10,
        helperNetPayment: 7.6,
        firstVisit: false,
        contact: {
          phones: {
            main: '',
          },
          mailchimp: {
            uniqueEmailId: '76a87873f8',
            contactId: 'dd79b600fc50bbf560b217a6711eadd3',
          },
          hubspot: {
            id: 537401,
          },
          _id: '6458ca7130e9765ee40f2d90',
          services: [],
          category: 'C',
          status: 'ACTIVE',
          subscribe: true,
          helpRequests: ['6458ca7130e9763ff70f2d8c'],
          hearAboutUs: 'Online search',
          title: 'Mr.',
          firstName: 'TEST',
          lastName: 'FAMILY MEMBER',
          email: 'o.bachun+2996458ca7130e9765ee40f2d90@staging.com',
          address: '75 Bitterne Road West',
          town: 'Southampton',
          postcode: 'SO18 1AN',
          createdAt: '2023-05-08T10:09:53.901Z',
          updatedAt: '2023-11-07T08:25:24.818Z',
          fullName: 'TEST FAMILY MEMBER',
          contactNumber: 8678,
          __v: 0,
          account: '6458ca7130e976a0870f2d94',
          defaultsCommissionRate: 20,
          id: '6458ca7130e9765ee40f2d90',
        },
        helper: {
          phones: {
            main: '1234567890',
            second: '1234567890',
          },
          dbs: {
            checkCompleted: false,
          },
          rate: 0,
          _id: '62a03e11ae8872346d12928e',
          notes: ['62a3123a62eb24d105925bb2'],
          status: 'ACTIVE_AND_REMOVED',
          score: 8,
          services: [
            'MEAL_PREPARATION',
            'DOG_WALKING',
            'CLEANING',
            'HOSPITAL_DISCHARGE_SUPPORT',
          ],
          defaultVAT: 0,
          profileStatus: 'ON_HOLD',
          coursesCertificates: [],
          firstName: 'UPG',
          address: '77 Bitterne Road West',
          lastName: 'Test',
          email: 'o.bachun+227@apiko.com',
          town: 'Southampton',
          postcode: 'SO18 1AN',
          location: {
            type: 'Point',
            coordinates: [-1.38171, 50.918082],
          },
          availability: [
            {
              day: 1,
              startTime: '10:00',
              endTime: '14:00',
            },
            {
              day: 2,
              startTime: '10:00',
              endTime: '14:00',
            },
            {
              day: 3,
              startTime: '10:00',
              endTime: '14:00',
            },
          ],
          holidays: [
            {
              from: '2023-11-10T00:00:00.000Z',
              to: '2023-11-24T00:00:00.000Z',
              _id: '654e4b459f765ad7a8c278b6',
              id: '654e4b459f765ad7a8c278b6',
            },
          ],
          createdAt: '2022-06-08T06:13:37.312Z',
          updatedAt: '2023-11-10T15:24:53.318Z',
          fullName: 'UPG Test',
          label: 'UPG Test',
          helperNumber: 1630,
          __v: 24,
          lastStatusChange: '2023-09-25T09:19:02.000Z',
          source: 'Instagram',
          account: '62a03e2dae887250061292b3',
          availabilityUpdatedAt: '2023-11-10T15:24:53.317Z',
          availableHours: 20,
          isAvailable: true,
          invoicesLink:
            'https://www.dropbox.com/scl/fi/2zdxz0o2199dm1u60jalp/Feedback-25.05.22.gslides?dl=0&rlkey=065pc9rscywl7czxtp7x1i7vm',
          importantInfo: 'IOS/Android review / Should be in active status',
          about: 'test',
          customerRadius: 17,
          customerRadiusMeters: 27353,
          defaultWeekendRate: 10,
          image: '',
          special: 'test',
          opportunityForms: [
            {
              _id: '62c5313d36cf5e073d293231',
              shortURL: '62c5313d36cf5e2640293230',
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxwZXJJZCI6IjYyYTAzZTExYWU4ODcyMzQ2ZDEyOTI4ZSIsImhlbHBSZXF1ZXN0IjoiNjJhMDdhYTZjOTJmNzg1YTcxMTY4NGJhIiwiYWRtaW5OYW1lIjoiQWRtaW4gVGVzdCIsImlhdCI6MTY1NzA5MDM2NSwiZXhwIjoxNjU5NzY4NzY1fQ.JNkHSl6BTvdxFP53C1jDS9qTuTavUuV7f8O6olc7XOg',
              opportunityType: 'HR',
              id: '62c5313d36cf5e073d293231',
            },
            {
              _id: '62c5495b36cf5e656e294067',
              shortURL: '62c5495b36cf5e1565294066',
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxwZXJJZCI6IjYyYTAzZTExYWU4ODcyMzQ2ZDEyOTI4ZSIsImhlbHBSZXF1ZXN0IjoiNjJhMDdhYTZjOTJmNzg1YTcxMTY4NGJhIiwiYWRtaW5OYW1lIjoiQWRtaW4gVGVzdCIsImlhdCI6MTY1NzA5NjUzOSwiZXhwIjoxNjU5Nzc0OTM5fQ.g_PJ7aAOprlbdPwutcYPqfqqtPh4WfcaBRwGbPq0BqA',
              opportunityType: 'HR',
              id: '62c5495b36cf5e656e294067',
            },
            {
              _id: '62c5496636cf5e3277294077',
              shortURL: '62c5496636cf5e2f17294076',
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxwZXJJZCI6IjYyYTAzZTExYWU4ODcyMzQ2ZDEyOTI4ZSIsImhlbHBSZXF1ZXN0IjoiNjJhMDdhYTZjOTJmNzg1YTcxMTY4NGJhIiwiYWRtaW5OYW1lIjoiQWRtaW4gVGVzdCIsImlhdCI6MTY1NzA5NjU1MCwiZXhwIjoxNjU5Nzc0OTUwfQ.IRfW2CpJY0k-1UMcQQbdcUAjtN98eWyaq28Lrk-2Qz4',
              opportunityType: 'COVER',
              id: '62c5496636cf5e3277294077',
            },
            {
              _id: '62c6a3b0fb711287816bdbe9',
              shortURL: '62c6a3b0fb711249206bdbe8',
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxwZXJJZCI6IjYyYTAzZTExYWU4ODcyMzQ2ZDEyOTI4ZSIsImhlbHBSZXF1ZXN0IjoiNjJhMDdhYTZjOTJmNzg1YTcxMTY4NGJhIiwiYWRtaW5OYW1lIjoiQWRtaW4gVGVzdCIsImlhdCI6MTY1NzE4NTIwMCwiZXhwIjoxNjU5ODYzNjAwfQ.DwIQgCSPh6nwA0tFmGxsPHSTLAUpumXjUCHvQ_NIhyk',
              opportunityType: 'COVER',
              id: '62c6a3b0fb711287816bdbe9',
            },
            {
              _id: '62c6a3bdfb71126cc96bdc10',
              shortURL: '62c6a3bdfb71123cd66bdc0f',
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxwZXJJZCI6IjYyYTAzZTExYWU4ODcyMzQ2ZDEyOTI4ZSIsImhlbHBSZXF1ZXN0IjoiNjJhMDdhYTZjOTJmNzg1YTcxMTY4NGJhIiwiYWRtaW5OYW1lIjoiQWRtaW4gVGVzdCIsImlhdCI6MTY1NzE4NTIxMywiZXhwIjoxNjU5ODYzNjEzfQ.Wix9iQtTmfzja05V-mcVm4XylVgyIXU9eryvHag4A5U',
              opportunityType: 'HR',
              id: '62c6a3bdfb71126cc96bdc10',
            },
            {
              _id: '62cbfbda806f17e7ba12d48b',
              shortURL: '62cbfbda806f17572912d48a',
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxwZXJJZCI6IjYyYTAzZTExYWU4ODcyMzQ2ZDEyOTI4ZSIsImhlbHBSZXF1ZXN0IjoiNjJhMDdhYTZjOTJmNzg1YTcxMTY4NGJhIiwiYWRtaW5OYW1lIjoiQWRtaW4gVGVzdCIsImlhdCI6MTY1NzUzNTQ1MCwiZXhwIjoxNjYwMjEzODUwfQ.eZh5cjmpMXnvG43YqnKVOv9MBJhyeUTFP7r9dwSsNiU',
              opportunityType: 'COVER',
              id: '62cbfbda806f17e7ba12d48b',
            },
            {
              _id: '62cbfe0e806f17d5e312d5e4',
              shortURL: '62cbfe0e806f1769f012d5e3',
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxwZXJJZCI6IjYyYTAzZTExYWU4ODcyMzQ2ZDEyOTI4ZSIsImhlbHBSZXF1ZXN0IjoiNjJhMDdhYTZjOTJmNzg1YTcxMTY4NGJhIiwiYWRtaW5OYW1lIjoiQWRtaW4gVGVzdCIsImlhdCI6MTY1NzUzNjAxNCwiZXhwIjoxNjYwMjE0NDE0fQ.u8WdN5fIFcJ5Dh25H6pt_m63vsWva_WNpL_oJE84Flc',
              opportunityType: 'COVER',
              id: '62cbfe0e806f17d5e312d5e4',
            },
            {
              _id: '62cd407a305898737f3ef221',
              shortURL: '62cd407a3058985b483ef220',
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxwZXJJZCI6IjYyYTAzZTExYWU4ODcyMzQ2ZDEyOTI4ZSIsImhlbHBSZXF1ZXN0IjoiNjJhMDdhYTZjOTJmNzg1YTcxMTY4NGJhIiwiYWRtaW5OYW1lIjoiQWRtaW4gVGVzdCIsImlhdCI6MTY1NzYxODU1NCwiZXhwIjoxNjYwMjk2OTU0fQ.-Rpd8ut1QdKJhUva7XEYFk_TojiqOdqfcBddsRovvp0',
              opportunityType: 'COVER',
              id: '62cd407a305898737f3ef221',
            },
            {
              _id: '62cd4dcb305898662f3efcbb',
              shortURL: '62cd4dcb30589828383efcba',
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxwZXJJZCI6IjYyYTAzZTExYWU4ODcyMzQ2ZDEyOTI4ZSIsImhlbHBSZXF1ZXN0IjoiNjJhMDdhYTZjOTJmNzg1YTcxMTY4NGJhIiwiYWRtaW5OYW1lIjoiQWRtaW4gVGVzdCIsImlhdCI6MTY1NzYyMTk2MywiZXhwIjoxNjYwMzAwMzYzfQ.ra6Wlr83NtEC-g3PP9eFM3ch_MNam3ykkpVf-hrs2aA',
              opportunityType: 'COVER',
              id: '62cd4dcb305898662f3efcbb',
            },
            {
              _id: '62cd4dd63058988d1e3efcd7',
              shortURL: '62cd4dd630589847d63efcd6',
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxwZXJJZCI6IjYyYTAzZTExYWU4ODcyMzQ2ZDEyOTI4ZSIsImhlbHBSZXF1ZXN0IjoiNjJhMDdhYTZjOTJmNzg1YTcxMTY4NGJhIiwiYWRtaW5OYW1lIjoiQWRtaW4gVGVzdCIsImlhdCI6MTY1NzYyMTk3NCwiZXhwIjoxNjYwMzAwMzc0fQ.bMKIaEYfWYqwmM0XZDYu9ObTwgWnWW1tUDcPLrKx96A',
              opportunityType: 'COVER',
              id: '62cd4dd63058988d1e3efcd7',
            },
            {
              shortURL: '653a0e39106c92a6c47a995d',
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxwZXJJZCI6IjYyYTAzZTExYWU4ODcyMzQ2ZDEyOTI4ZSIsImhlbHBSZXF1ZXN0IjoiNjRiNGViODEyNDE2MWNjNjZjNjVlMTAyIiwiYWRtaW5OYW1lIjoiQWRtaW4gVGVzdCIsImlhdCI6MTY5ODMwMzU0NSwiZXhwIjoxNzAwOTgxOTQ1fQ.CvWWfEIpm4OJ1sQ-oPL4Jj-26FA1sMaWS99_olraVMc',
              opportunityType: 'HR',
              _id: '653a0e39106c92a6c47a995e',
              id: '653a0e39106c92a6c47a995e',
            },
            {
              shortURL: '653a109f106c92a6c47b2109',
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxwZXJJZCI6IjYyYTAzZTExYWU4ODcyMzQ2ZDEyOTI4ZSIsImhlbHBSZXF1ZXN0IjoiNjRiNGViODEyNDE2MWNjNjZjNjVlMTAyIiwiYWRtaW5OYW1lIjoiQWRtaW4gVGVzdCIsImlhdCI6MTY5ODMwNDE1OSwiZXhwIjoxNzAwOTgyNTU5fQ.4kTg5iuOomvAen5SHo6m3NX9argst4mPjWca-Nqj3g0',
              opportunityType: 'HR',
              _id: '653a109f106c92a6c47b210a',
              id: '653a109f106c92a6c47b210a',
            },
            {
              shortURL: '653a16dd106c92a6c47bc0f6',
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxwZXJJZCI6IjYyYTAzZTExYWU4ODcyMzQ2ZDEyOTI4ZSIsImhlbHBSZXF1ZXN0IjoiNjUwMDFlYzBmOWUzOTZlNWIyMzA1ZGQwIiwiYWRtaW5OYW1lIjoiQWRtaW4gVGVzdCIsImlhdCI6MTY5ODMwNTc1NywiZXhwIjoxNzAwOTg0MTU3fQ.a3cSl-lN52lWav-lQAQAV6UANyeksq3lRKxfPjmZ3Pw',
              opportunityType: 'HR',
              _id: '653a16dd106c92a6c47bc0f7',
              id: '653a16dd106c92a6c47bc0f7',
            },
            {
              shortURL: '653a17cf106c92a6c47c6283',
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWxwZXJJZCI6IjYyYTAzZTExYWU4ODcyMzQ2ZDEyOTI4ZSIsImhlbHBSZXF1ZXN0IjoiNjUwMDFlYzBmOWUzOTZlNWIyMzA1ZGQwIiwiYWRtaW5OYW1lIjoiQWRtaW4gVGVzdCIsImlhdCI6MTY5ODMwNTk5OSwiZXhwIjoxNzAwOTg0Mzk5fQ.dgj6GdMB8D5bzOtLurKrcp6bhwSzarHfVL4A1Zt8gOQ',
              opportunityType: 'HR',
              _id: '653a17cf106c92a6c47c6284',
              id: '653a17cf106c92a6c47c6284',
            },
          ],
          closedReason: null,
          pausedReason: null,
          previousStatus: 'PAUSED',
          locationCoordinatesString: '-1.38171,50.918082',
          bankHolidayRate: 'WEEKEND',
          defaultWeekdayRate: 10,
          isAvailabilityExpired: false,
          id: '62a03e11ae8872346d12928e',
        },
        plannedStartTime: '2023-11-16T06:00:00.000Z',
        plannedEndTime: '2023-11-16T07:00:00.000Z',
        invoiceRate: 10,
        date: '2023-11-16T00:00:00.000Z',
        helpRequest: {
          hubspot: {
            companyId: 15681812507,
          },
          receiveAttendanceAllowanceInformation: {
            value: 'ALREADY_RECEIVING',
            rate: 'UNKNOWN',
          },
          _id: '6458ca7130e9763ff70f2d8c',
          helpNumber: 5995,
          creationDateTime: '2023-05-08T09:22:28.000Z',
          entryPoint: 'backend',
          status: 'CLOSED',
          stage: 'VISIT_SCHEDULE_AGREED',
          services: ['HOME_HELP', 'MEAL_PREPARATION'],
          contacts: [
            {
              contact: '6458ca7130e9765ee40f2d90',
              contactType: 'CUSTOMER',
              visible: true,
              invitationApproved: true,
              roles: [],
              permissions: ['VIEW_BASIC_HR'],
              invoiceDelivery: [],
            },
            {
              contact: '6458ca7130e976e86a0f2d98',
              contactType: 'CONNECTION',
              visible: true,
              invitationApproved: true,
              roles: ['OWNER'],
              permissions: [
                'VIEW_BASIC_HR',
                'VIEW_EXTENDED_HR',
                'VIEW_SCHEDULE',
                'VIEW_CONTACTS',
                'ADD_CONTACTS',
                'VIEW_PAYMENTS',
                'EDIT_PAYMENTS',
                'EDIT_PERMISSIONS',
              ],
              invoiceDelivery: ['EMAIL'],
              relationship: 'ADDITIONAL_CUSTOMER',
            },
            {
              contact: '6458cdbe30e976c0af0f2feb',
              contactType: 'CONNECTION',
              relationship: 'UNKNOWN',
              visible: true,
              roles: ['EMERGENCY_CONTACT'],
              permissions: ['VIEW_BASIC_HR'],
              invoiceDelivery: [],
            },
            {
              contact: '64590bf230e976e52a0f5003',
              contactType: 'CONNECTION',
              relationship: 'UNKNOWN',
              visible: true,
              roles: ['EMERGENCY_CONTACT'],
              permissions: ['VIEW_BASIC_HR'],
              invoiceDelivery: [],
            },
          ],
          notes: [],
          selectedDateTime: [
            {
              day: 1,
              startTime: '08:00',
              endTime: '10:00',
            },
            {
              day: 2,
              startTime: '08:00',
              endTime: '10:00',
            },
          ],
          recipientType: 'FAMILY',
          frequency: 'THREE_DAYS_A_WEEK',
          visitDuration: 'NOT_SURE_YET',
          accountManager: '5ee8b8921520440011a3ce15',
          dementia: 'NO',
          helpers: [
            {
              currentRates: {
                weekdayRate: 10,
                weekendRate: 10,
              },
              futureRates: {
                weekdayRate: 13,
                weekendRate: 10,
                appliedAfter: '2023-11-22T00:00:00.000Z',
              },
              action: 'ACCEPTED',
              helper: '619f80c3034c430015828ac3',
              type: 'HR',
              _id: '6458d26c30e97627bd0f3293',
              id: '6458d26c30e97627bd0f3293',
            },
            {
              currentRates: {
                weekdayRate: 19,
                weekendRate: 22,
              },
              action: 'ACTIVE',
              helper: '6257c6cd780b140014c66799',
              type: 'HR',
              _id: '654a55505e9dec049a949d58',
              id: '654a55505e9dec049a949d58',
            },
            {
              currentRates: {
                weekdayRate: 10,
                weekendRate: 10,
              },
              action: 'ACTIVE',
              helper: '6458caa730e976c5b20f2e03',
              type: 'COVER',
              _id: '6551f820ebcdf1b8c246e9c4',
              id: '6551f820ebcdf1b8c246e9c4',
            },
            {
              currentRates: {
                weekdayRate: 10,
                weekendRate: 10,
              },
              action: 'ACTIVE',
              helper: '62a03e11ae8872346d12928e',
              type: 'HR',
              _id: '6554c54b55e5f93bff854004',
              id: '6554c54b55e5f93bff854004',
            },
          ],
          createdAt: '2023-05-08T10:09:53.642Z',
          updatedAt: '2023-11-15T13:19:07.010Z',
          helpNumberStr: '5995',
          __v: 3,
          communicationPreference: '6458ca7130e9765ee40f2d90',
          isCustomerPreference: true,
          postcode: 'SO18 1AN',
          closeReason: 'AD_HOC_NEED',
          pauseReason: '',
          helpInitiator: '6458ca7130e976e86a0f2d98',
          paymentArranged: 'NO',
          statusChangedAt: '2023-08-14T09:24:59.557Z',
          teamMode: false,
          id: '6458ca7130e9763ff70f2d8c',
        },
        commission: 20,
      },
    ],
  };

  @Get()
  getHello(): any {
    const helperList: any[] = [];

    Object.entries(this.data).forEach(([helperId, visits]: [string, any]) => {
      const entry: any = {
        helper: helperId,
        visits: visits.map((visit: any) => Date.parse(visit.plannedStartTime)),
      };
      helperList.push(entry);
    });
    return helperList;
  }
}
