window.BENCHMARK_DATA = {
  "lastUpdate": 1605998334231,
  "repoUrl": "https://github.com/mzabaluev/tokio",
  "entries": {
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/mzabaluev/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605998316138,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 810,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12086,
            "range": "± 3345",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 834,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 12536,
            "range": "± 4526",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 456,
            "range": "± 79",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_semaphore": [
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/mzabaluev/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605998319451,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 14798,
            "range": "± 5728",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1083,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 644,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13971,
            "range": "± 2462",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1078,
            "range": "± 95",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/mzabaluev/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605998328433,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 210905,
            "range": "± 66986",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 736424,
            "range": "± 125753",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5736748,
            "range": "± 695832",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 21422965,
            "range": "± 2565494",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
      {
        "commit": {
          "author": {
            "email": "eliza@buoyant.io",
            "name": "Eliza Weisman",
            "username": "hawkw"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "f927f01a34d7cedf0cdc820f729a7a6cd56e83dd",
          "message": "macros: fix rustfmt on 1.48.0 (#3160)\n\n## Motivation\r\n\r\nLooks like the Rust 1.48.0 version of `rustfmt` changed some formatting\r\nrules (fixed some bugs?), and some of the code in `tokio-macros` is no\r\nlonger correctly formatted. This is breaking CI.\r\n\r\n## Solution\r\n\r\nThis commit runs rustfmt on Rust 1.48.0. This fixes CI.\r\n\r\nCloses #3158",
          "timestamp": "2020-11-20T10:19:26-08:00",
          "tree_id": "bd0243a653ee49cfc50bf61b00a36cc0fce6a414",
          "url": "https://github.com/mzabaluev/tokio/commit/f927f01a34d7cedf0cdc820f729a7a6cd56e83dd"
        },
        "date": 1605998333337,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6806373,
            "range": "± 2474522",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6826577,
            "range": "± 1566735",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6040723,
            "range": "± 2017668",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 737,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 746,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 759,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 50861,
            "range": "± 7367",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 780,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1063670,
            "range": "± 120330",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 779647,
            "range": "± 102663",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}