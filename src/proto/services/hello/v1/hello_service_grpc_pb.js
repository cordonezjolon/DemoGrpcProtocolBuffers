// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// proto/services/hello_service.proto
//
'use strict';
var grpc = require('@grpc/grpc-js');
var services_hello_v1_hello_service_pb = require('../../../services/hello/v1/hello_service_pb.js');
var com_language_v1_language_pb = require('../../../com/language/v1/language_pb.js');

function serialize_services_hello_v1_GreetRequest(arg) {
  if (!(arg instanceof services_hello_v1_hello_service_pb.GreetRequest)) {
    throw new Error('Expected argument of type services.hello.v1.GreetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_hello_v1_GreetRequest(buffer_arg) {
  return services_hello_v1_hello_service_pb.GreetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_hello_v1_GreetResponse(arg) {
  if (!(arg instanceof services_hello_v1_hello_service_pb.GreetResponse)) {
    throw new Error('Expected argument of type services.hello.v1.GreetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_hello_v1_GreetResponse(buffer_arg) {
  return services_hello_v1_hello_service_pb.GreetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HelloServiceService = exports.HelloServiceService = {
  greet: {
    path: '/services.hello.v1.HelloService/Greet',
    requestStream: false,
    responseStream: false,
    requestType: services_hello_v1_hello_service_pb.GreetRequest,
    responseType: services_hello_v1_hello_service_pb.GreetResponse,
    requestSerialize: serialize_services_hello_v1_GreetRequest,
    requestDeserialize: deserialize_services_hello_v1_GreetRequest,
    responseSerialize: serialize_services_hello_v1_GreetResponse,
    responseDeserialize: deserialize_services_hello_v1_GreetResponse,
  },
};

exports.HelloServiceClient = grpc.makeGenericClientConstructor(HelloServiceService);
